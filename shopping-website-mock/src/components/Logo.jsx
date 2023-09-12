import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from "@fortawesome/free-solid-svg-icons"
import { StyledLogo } from './styles/Logo.styled'

export const Logo = () => {
  return (
    <StyledLogo>
        <FontAwesomeIcon icon={faTags} size='3x'/>
        <h1>Top Shop</h1>
    </StyledLogo>
  )
}
