import styled from 'styled-components';

export const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 0 20px;
    margin-bottom: 10px;

    div {
        display: flex;
        justify-content: row;
        align-items: center;
    }

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 10 10px black;
`

