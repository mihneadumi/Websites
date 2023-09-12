/* eslint-disable react/prop-types */
import Card from '../Card/Card'
import "./Board.css"

const Board = ({ cards, handleClick }) => {

  return(
    <div id="cards">
      {cards.map((card, index) => {
        return <Card
            key={index}
            index={index}
            name={card.name}
            img={card.img}
            handleClick={handleClick}
            />
      })}
    </div>
)
}

export default Board