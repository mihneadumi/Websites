/* eslint-disable react/prop-types */
import "./Card.css"

const Card = ({ index, name, img, handleClick }) => {
 
    function clickHandler() {
        handleClick(index);
    }

    return (
        <div id="card-div" onClick={clickHandler}>
            <img
                id="card-img"
                src={img}
                alt="avatar"
            />
            <h2 id="card-name">{name}</h2>
        </div>
    )
}

export default Card