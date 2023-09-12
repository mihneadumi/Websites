import styled from 'styled-components';

export const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    div.container {
        height:100%;
        width: 100%;
        padding-bottom: 100px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .main-button {
        font-size: 45px;
        background-color: #90E0EF;
        border-radius: 10px;
        padding: 10px;
        border: 2px solid #03045E;

        transition: 0.3s;
    }

    .main-button:hover {
        background-color: #CAF0F8;
        cursor: pointer;
    }
    .main-button:active {
        background-color: #90E0EF;
        transform: scale(1.05, 1.05)
    }
`