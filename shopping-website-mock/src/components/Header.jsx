import { StyledHeader, Nav } from "./styles/Header.styled"
import { Logo } from "./Logo"
import { CartButton } from "./CartButton"
import { CatalogButton } from "./CatalogButton"

import { useDispatch } from "react-redux"
import { hideCart } from '../redux/reducers/cart/cartSlice'
import { showCart } from '../redux/reducers/cart/cartSlice'

export const Header = () => {

  const dispatch = useDispatch();
  const handleCatalogClick = () => {
      dispatch(hideCart())
  }

  const handleCartClick = () => {
      dispatch(showCart())
  }

  return (
    <StyledHeader>
        <Nav>
            <Logo />
            <div>
                <CatalogButton handleClick={handleCatalogClick} />
                <CartButton handleClick={handleCartClick} text={"My Cart"}/>
            </div>
        </Nav>
    </StyledHeader>
  )
}
