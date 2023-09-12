import styled from 'styled-components';

export const StyledStatistics = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    nav.stats-nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;

        svg {
            padding: 5px;
            border: 2px solid;
            background-color: #00B4D8;
            border-radius: 15px;
            transition: 0.3s;
        }

        svg:hover {
            background-color: #90E0EF;
            cursor: pointer;
        }
        svg:active {
            cursor: pointer;
            scale: 1.05; 
        }
    }

    #title {
        padding: 20px 0;
    }

`