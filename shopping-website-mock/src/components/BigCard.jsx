/* eslint-disable react/prop-types */
import { StyledBigCard } from "./styles/BigCard.styled"

export const BigCard = ({ item }) => {
    return (
        <StyledBigCard>
            <img src={item.image} />
            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h2>Price: ${item.price}</h2>
            </div>
        </StyledBigCard>
    )
}
