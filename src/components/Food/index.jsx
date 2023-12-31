import { Container } from './styles';

import { MdKeyboardArrowRight } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { USER_ROLE } from '../../utils/roles';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { MdEdit } from "react-icons/md";

export function Food({ data, ...rest }) {
    const { user } = useAuth();
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    const handleIncrement = () => {
        setAmount(prevAmount => prevAmount +1);
    };

    const handleDecrement = () => {
        setAmount(prevAmount => prevAmount -1);
    };

    const handleEdit = () => {
        navigate(`/edit/${data.id}`);
    }

    const handleDetails = () => {
        navigate(`/details/${data.id}`);
    }

    const handleButton = (e) => {
        e.preventDefault();
        alert(`Adicionado ${amount} unidades de ${data.title}`)
    }

    return (
        <Container {...rest}>
            

            {user.role === USER_ROLE.CUSTOMER && 
                <div id='heart'>
                    <FaRegHeart />
                </div>
            }

            {user.role === USER_ROLE.ADMIN &&
                <div id='edit'>
                    <button onClick={handleEdit}><MdEdit /></button>
                </div>                
            }

            <div id='content'>

                <div id='details' onClick={handleDetails}>

                    <img 
                        src={`http://localhost:3333/files/${data.image}`}
                        alt="prato de salada" 
                    />

                    <div id='foodName'>
                        <h1>{data.title}</h1>
                        <MdKeyboardArrowRight id="arrow"/>
                    </div>

                    
                    <p>{data.description}</p>                

                </div>

                <h2>R$ {data.price}</h2>

                {user.role === USER_ROLE.CUSTOMER && 
                    <div id="buy">
                        <div id='amount'>
                            <FiMinus onClick={handleDecrement}/>
                            <h1>{amount}</h1>
                            <FiPlus onClick={handleIncrement}/>
                        </div>
                        
                        <button id='include' title="include" onClick={handleButton}>Include</button>                        
                    </div>

                }
                
                             

                
                

            </div>

        </Container>
    )
}