/* eslint-disable react/prop-types */
import "./Score.css"

const Score = ({ score, highscore }) => {
    console.log(score);
    return (
    <div id="scoreboard">
        <p id="score-text">Score: {score}</p>
        <p id="highscore-text">Highscore: {highscore}</p>
    </div>
    )
}

export default Score