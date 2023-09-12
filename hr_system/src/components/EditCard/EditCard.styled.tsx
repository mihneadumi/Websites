import styled from 'styled-components';

export const StyledEditCard = styled.div`

    background-color: #90E0EF;
    padding: 10px;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    span {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 5px;

        font-size: 30px;
        font-weight: bold;


        input {

            background-color: #CAF0F8;
            border: none;
            border-radius: 15px;
            font-size: 40px;
            padding: 0 5px;
        }
        input::placeholder {
            color: #03055e81;
        }
    }

    h1 {
        font-size: 35px;
        background-color: #CAF0F8;
        border-radius: 10px;
        padding: 10px;
        border: 2px solid #03045E;
        transition: 0.3s;
    }

    h1:hover {
        background-color: #90E0EF;
        cursor: pointer;
    }
    h1:active {
        background-color: #90E0EF;
        transform: scale(1.05, 1.05)
    }
`