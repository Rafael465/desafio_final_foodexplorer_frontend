import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import { useAuth } from '../../hooks/auth';

import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiUpload } from "react-icons/fi";

import { Container, Content } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { FoodItem } from "../../components/FoodItem";
import { Section } from "../../components/Section";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { Input } from '../../components/Input';

import { api } from "../../services/api";


export function Edit () {
    const { id } = useParams();
    const { updateImage } = useAuth();
    
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [ingredient, setIngredient] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    
    const [imageFile, setImageFile] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchFoodDetails() {
            try {
                const response = await api.get(`/foods/${id}`);
                const food = response.data;

                setTitle(food.title);
                setType(food.type);
                setPrice(food.price);
                setDescription(food.description);
                setIngredient(food.ingredient);
            } catch (error) {
                console.error("Error fetching food details:", error);
            }
        }

        fetchFoodDetails();
    }, [id]);

    async function handleDeleteFood(id) {
        const confirmDelete = window.confirm("Voce quer mesmo excluir?");
        if (confirmDelete) {
            try {
                await api.delete(`/foods/${id}`);
                alert("Prato excluído com sucesso")
                navigate("/")                
            } catch (error) {
                console.error("Error deleting food:", error);
            }
        }
    }

    function handleImage(event) {
        const file = event.target.files[0];
        setImageFile(file);
    }

    function handleAddIngredient() {
        if (newIngredient.trim() === "") {
            return;
        }
    
        const exists = ingredient.some(existingIngredient => {
            if (typeof existingIngredient === 'object' && existingIngredient.name) {
                return existingIngredient.name === newIngredient;
            }
            return existingIngredient === newIngredient;
        });
    
        if (!exists) {
            setIngredient(prevState => [...prevState, newIngredient]);
            setNewIngredient("");
        } else {
            alert("O ingrediente já existe.");
        }
    }

    function handleRemoveIngredient(deleted) {
        setIngredient(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }    

    async function handleEditFood() {
        if (!title) {
            return alert("Digite o título do prato.");
        }
    
        try {
            const formattedIngredients = ingredient.map(item => item.name || item);
    
            const response = await api.put(`/foods/${id}`, {
                title,
                type,
                description,
                price,
                ingredient: formattedIngredients,
            });
    
            await updateImage({ imageFile, id: response.data.id });
            alert("Prato atualizado com sucesso!");
        } catch (error) {
            console.error("Error updating food:", error);
            alert(`Error updating food: ${error.message}`);
        }
    }
    
    return (
        <Container>

            <Header/>   

            <Content>
                
                    <div id="top">
                        <Link id="back" to="/">
                            <MdKeyboardArrowLeft id="arrow"/>
                            <ButtonText title="voltar"/>
                        </Link>

                        <h1>Editar Prato</h1>
                        
                    </div>
                    
                    <div id="divOne">                    

                        <div id="image">
                            
                            <h2>Imagem do prato</h2>      

                            <label htmlFor="file" id="select">
                                <FiUpload />
                                <h2>Escolha a imagem</h2>
                            </label>

                            <Input 
                                id="file"
                                type='file'
                                onChange={handleImage}
                            />
                        </div>

                        <div id="name">
                            <Input
                                id="inputName"
                                value={title}
                                title="Nome"
                                placeholder="Ex.: Salada Ceasar"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>

                        <div id="typeInput">
                            <h2>Categoria</h2>
                            <select value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="none">Escolha a categoria</option>
                                <option value="food">Comida</option>
                                <option value="drink">Bebida</option>
                                <option value="dessert">Sobremesa</option>
                            </select>
                        </div>
                    </div>

                    
                    <div id="divTwo">
                        <div id="flexTags" >
                                
                            <h2>Ingredientes</h2>

                            <div id="tags">
                                {ingredient.map((ingredient, index) => (
                                        <FoodItem 
                                            className="item"
                                            key={String(index)}
                                            value={ ingredient.name }
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))                          
                                }

                                <FoodItem 
                                    className="new"
                                    $isNew 
                                    placeholder="Novo ingrediente" 
                                    onChange={e => setNewIngredient(e.target.value)}
                                    value={newIngredient}
                                    onClick={handleAddIngredient}
                                />
                            </div>
                        </div>
                        
                        <div id="price">
                            <Input
                                id="priceInput"
                                value={price}
                                title="Preço"
                                placeholder="Adicione o valor"
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                    </div>                
                
                    <div id="description">
                        <textarea
                            id="descriptionInput"
                            value={description}
                            placeholder="Descreva o prato"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    <div id="buttons">
                        <button id="delete" onClick={() => handleDeleteFood(id)}>
                            Excluir prato
                        </button>

                        <Button  
                            id="update"
                            title="Salvar alterações"
                            onClick={handleEditFood}
                            className="custom-button" 
                        />                
                    </div>
                
            </Content> 

            <Footer id="footer"/>

        </Container>
    )
}