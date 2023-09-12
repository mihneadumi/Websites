import styled from 'styled-components';

export const StyledCartButton = styled.div`

    background-color: ${({theme}) => theme.colors.main};
    border: 2px solid;
    border-color: ${({theme}) => theme.colors.text};
    padding: 7px;
    border-radius: 15px;
    margin: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    transition: 0.3s;

    h2 {
        margin: 0;
        font-weight: 400;
    }

    &:hover {
        cursor: pointer;
        background-color: ${({theme}) => theme.colors.accent2};
        color: ${({theme}) => theme.colors.main};
    }
`