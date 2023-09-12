import styled from 'styled-components';

export const StyledUserCard = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 0 20px;
    border-radius: 15px;
    background-color: #CAF0F8;
    transition: 0.3s;

    span#heading {
        font-size: 20px;
        font-weight: bold;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        #email {
            padding-left: 10px;
        }
    }

    p {
        margin: 10px 0;
    }

    div#details {
        width: 100%;
        font-size: 25px;
        padding-top: 10px;
        span.row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 30%;
        }
    }

    &:hover {
        background-color: #00B4D8;
        cursor: pointer;
    }

    &:active {
        scale: 1.01;
    }

`