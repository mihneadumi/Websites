import styled from 'styled-components';

export const StyledPagination = styled.nav`
    background-color: #90E0EF;
    width: 60%;
    margin-top: 20px;
    .pagination {
        display: flex;
        flex-direction: row;
        gap: 5px;
        
        margin: 5px 0;
        padding: 0 10px;
        list-style: none;

        overflow-y: hidden;
        overflow-x: auto;
    }

    .pagination::-webkit-scrollbar {
        height: 12px;
        width: 12px;
        background: #CAF0F8;
        border-radius: 10px;
    }
    .pagination::-webkit-scrollbar-thumb {
        background: #0077B6;
        -webkit-border-radius: 1ex;
    }
    .pagination::-webkit-scrollbar-corner {
        background: #000;
    }

    .page-item {
        padding: 0;
        border: 2px solid;
    }
    .page-item:hover {
        background-color: #CAF0F8;
        cursor: pointer;
    }
    .page-item:active {
        scale: 1.05;
    }
    .page-link {
        height: 25px;
        width: 25px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`