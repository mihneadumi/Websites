import { useDispatch, useSelector } from "react-redux"
import { Title } from "./Title"
import { StyledCart } from "./styles/Cart.styled"
import { VerticalContainer } from "./styles/VerticalContainer.styled"
import { BigCard } from "./BigCard"
import { CartButton } from "./CartButton"

import { emptyCart } from '../redux/reducers/cart/cartSlice'


export const Cart = () => {

    const items = useSelector(state => state.cart.cart);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(emptyCart());
        alert("The prder has been placed!")
    }

    return (
        <StyledCart>
            <Title title="Cart" />
            <VerticalContainer>
                {items.length ? items.map((item) => {
                    return <BigCard key={item.title+item.id} item={item} />
                }):<h1>The cart is empty</h1>}
            </VerticalContainer>
            <span>
                <h1>Total Price: ${totalPrice}</h1>
                <CartButton handleClick={handleClick} text={"Check Out"} />
            </span>
        </StyledCart>
    )
}
