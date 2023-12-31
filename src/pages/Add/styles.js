import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBrakepoints";

export const Container = styled.div`

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const Content = styled.div`
    width: 100%;
    max-width: 50rem;

    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;

    #top {
        width: 100%;
        max-width: 36rem;
        
        #back {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        svg {
            font-size: 35px;
            margin-left: -10px;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > h1 {
            margin-top: 24px;
            margin-bottom: 24px;
            font-size: 32px;
        }
    }

    #divOne {
        width: 100%;
        max-width: 36rem;

        #image {
            width: 100%;
            max-width: 36rem;
            height: 4.8rem;

            margin-bottom: 24px;
    
            border-radius: 0.8rem;
    
    
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
    
            cursor: pointer;

            >h2 {
                display: none;
            }
            
            #select {
                height: 100%;

                display: flex;
                align-items: center;
                justify-content: center;

                gap: 10px;
    
                cursor: pointer;
    
                svg {
                    font-size: 2.4rem;
                }

                >h2 {
                    font-size: 1.4rem;
                }
            }
    
            #file {
                display: none;
            }        
        }
        
        #name {
            width: 100%;
            max-width: 36rem;

            margin-bottom: 24px;
    
            #inputName {
                height: 4.8rem;

                color: ${({ theme }) => theme.COLORS.LIGHT_400};
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }
        }

        #typeInput {
            width: 100%;
            max-width: 36rem;
    
            margin-bottom: 24px;
    
            h2 {
                margin-bottom: 8px;
                color: ${({ theme }) => theme.COLORS.LIGHT_400};
            }
    
            select {
                width: 100%;
                padding: 1.4rem 1.2rem;
    
                border: none;
                border-radius: 0.8rem;
    
                cursor: pointer;
                appearance: none;
    
                color: ${({ theme }) => theme.COLORS.LIGHT_400};
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }
        }  
    }
  
    #divTwo {
        width: 100%;
        max-width: 36rem;

        #flexTags {
            width: 100%;
            min-height: 48px;

            box-sizing: border-box;
            border-radius:  0.8rem;

            >h2 {
                margin-bottom: 8px;

                color: ${({ theme }) => theme.COLORS.LIGHT_400};
            }

            #tags {
                width: 100%;
                min-width: 32rem;
    
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
    
                gap: 6px;
                
                padding: 5px 8px;
                box-sizing: border-box;
                margin-bottom: 24px;
    
                border-radius: 0.8rem;
    
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
                
                .item {
                    width: 150px;
                    max-width: 11.5rem;    
                    height: 32px;
                }
    
                .new {
                    width: 100%;
                    max-width: 11.5rem;
                    height: 32px;
                    background-color: transparent;              
                }
            }
        }

        #price {
            width: 100%;
            max-width: 36rem;
    
            margin-bottom: 24px;

            #priceInput {
                height: 4.8rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_400};
                background-color: ${({ theme }) => theme.COLORS.DARK_800};    
            } 
        }
    }

    #description {
        width: 100%;
        max-width: 36rem;
        margin-bottom: 24px;

        #descriptionInput {
            width: 100%;
            height: 17rem;

            font-family: 'Roboto', sans-serif;

            resize: none;
            border: none;
            border-radius: 0.8rem;

            padding: 10px;
            box-sizing: border-box;

            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }       
    }

    #save {
        width: 100%;
        max-width: 36rem;
        
        margin-bottom: 100px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        max-width: 80%;

        #top {
            max-width: 100%;
        }
        
        #divOne {
            max-width: 100%;
            
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            gap: 3.2rem;
            
            #image {
                max-width: 23rem;
                margin-top: 27px;

                >h2 {
                    width: 100%;
                    max-width: 130px;
        
                    display: flex;
        
                    margin-top: -27px;
                    margin-bottom: 8px;
                }
            }

            #name {
                max-width: 100%;
            }

            #typeInput {
                max-width: 36rem;
            }
        }

        #divTwo {
            max-width: 100%;

            display: flex;
            justify-content: space-between;

            gap: 32px;
    
    
            #flexTags {   
                width: 100%;
                height: 100%;
                min-height: 48px;

                padding: 0;

                box-sizing: border-box;
                border-radius: 0.8rem;


                >h2 {
                    margin-bottom: 8px;

                    color: ${({ theme }) => theme.COLORS.LIGHT_400};
                }
    
                #tags {
                    max-width: 100%;
                    min-height: 32px;
        
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    
                    gap: 16px;
                    padding: 5px 8px;
                    margin-bottom: 32px;

                    border-radius: 0.8rem;
    
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};

                    .item{
                        height: 36px;
    
                        background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
                    }
    
                    .new{
                        height: 36px;
                    }
                }
            }
    
            #price {
                max-width: 25rem;
            }
        }

        #description {
            max-width: 100%;

           

            #descriptionInput {
                height: 17rem;
                width: 100%;

                font-family: 'Roboto', sans-serif;

                resize: none;
                border: none;
                border-radius: 10px;
                
                padding: 10px;
                box-sizing: border-box;
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
   
            }
        }

        #save {
            max-width: 100%;
            
            display: flex;
            justify-content: flex-end;

            #saveButton {
                width: 17rem;
            }
        }
    }
`;