import styled from 'styled-components';

export const StyledHeader = styled.nav`

    width: 100%;
    padding: 0 40px 0 20px;
    background-color: #00B4D8;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span.title {
        font-size: 20px;
        background-color: #90E0EF;
        margin: 15px 0;
        padding: 0 10px;
        border-radius: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        transition: 0.3s;
    }

    h2 {
        margin: 15px 0;
    }

    span.buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }

    h1 {
        font-size: 25px;
        background-color: #90E0EF;
        border-radius: 10px;
        padding: 10px;

        transition: 0.3s;
    }

    span.title:hover, h1:hover {
        background-color: #CAF0F8;
        cursor: pointer;
    }
    span.title:active, h1:active {
        background-color: #90E0EF;
        transform: scale(1.05, 1.05)
    }
`