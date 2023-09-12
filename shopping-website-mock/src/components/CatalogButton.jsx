/* eslint-disable react/prop-types */
import { StyledCartButton } from "./styles/CartButton.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from "@fortawesome/free-solid-svg-icons"



export const CatalogButton = ({handleClick}) => {

    return (
        <StyledCartButton onClick={handleClick}>
            <FontAwesomeIcon icon={faList} size="xl"/>
            <h2>Catalog</h2>
        </StyledCartButton>
    )
}
