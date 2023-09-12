import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400;1,500&display=swap');

    * {
        font-family: 'Roboto', sans-serif;
        color: #03045E;
        box-sizing: border-box;
    }

    body, html, #root {

        background-color: #CAF0F8;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }

    h1 {
        margin: 0;
    }

    a:link, a:visited {
        text-decoration: none;
    }
`