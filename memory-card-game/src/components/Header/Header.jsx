/* eslint-disable react/prop-types */
import Score from "../Score/Score"
import "./Header.css"

const Header = ({ score, highscore }) => {
  return (
    <div id="head-div">
        <h2 id="title-text">Memory Game</h2>
        <Score score={score} highscore={highscore} />
    </div>
  )
}

export default Header