import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400;1,500&display=swap');

    * {
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.colors.text};
        box-sizing: border-box;
    }

    body, html {

        background-color: ${({ theme }) => theme.colors.body};
        padding: 0;
        margin: 0;
        width: 100%;
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }
`