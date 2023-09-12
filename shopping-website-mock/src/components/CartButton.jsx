/* eslint-disable react/prop-types */
import { StyledCartButton } from "./styles/CartButton.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

export const CartButton = ({handleClick, text}) => {

    return (
        <StyledCartButton onClick={handleClick}>
            <FontAwesomeIcon icon={faCartShopping} size="xl"/>
            <h2>{text}</h2>
        </StyledCartButton>
    )
}
