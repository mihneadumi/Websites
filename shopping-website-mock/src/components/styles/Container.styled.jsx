import styled from 'styled-components';

export const Container = styled.div`

    width: 80%;
    height: 800px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;

    overflow: scroll;

    padding: 10px 0;
    border-radius: 15px;
    background-color: ${({theme}) => theme.colors.accent}
` 