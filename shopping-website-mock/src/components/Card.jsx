/* eslint-disable react/prop-types */
import { StyledCard } from "./styles/Card.styled"
import { useDispatch } from "react-redux"
import { addItem } from "../redux/reducers/cart/cartSlice";

export const Card = ({ item }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addItem(item));
        alert("Item added to cart!");
    }
    return (
        <StyledCard>
            <img src={item.image} />
            <p>{item.title}</p>
            <h2>Price: ${item.price}</h2>
            <div onClick={handleClick}>Add to Cart</div>
        </StyledCard>
    )
}
