import styled from 'styled-components';

export const StyledCard = styled.div`

    font-size: 10px;
    padding: 10px;
    width: 15%;
    min-width: 200px;
    height: 350px; 
    border: 2px solid black;
    background-color: white;

    display: flex;
    flex-direction: column;


    img {
        height: 60%;
    }

    p {
        font-size: 15px;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 900;
    }

    div {
        
        margin-top: 10px;
        border-radius: 10px;
        border: 2px solid black;

        text-align: center;
        font-size: 25px;
        background-color: ${({theme}) => theme.colors.accent2};
        box-shadow: inset 0 0 0 0 black;
        transition: 0.3s;
    }

    div:hover {
        cursor: pointer;
        background-color: ${({theme}) => theme.colors.main};
    }
`