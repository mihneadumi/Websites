import styled from 'styled-components';

export const VerticalContainer = styled.div`

    width: 80%;
    max-height: 700px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    overflow-y: auto;

    padding: 10px 0;
    border-radius: 15px;
    background-color: ${({theme}) => theme.colors.accent}
` 