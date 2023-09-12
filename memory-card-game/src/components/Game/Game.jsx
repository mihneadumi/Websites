import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react'
import Board from '../Board/Board';
import Header from '../Header/Header';

const Game = () => {

    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);
    const [cards, setCards] = useState([]);

    // random name prin faker lib si dupa folosesc numele ca seed pt avatar generation
    function getAvatars() {
        const newCards = [];
        for (let i = 0; i < 10; ++i) {
            const result = faker.person.firstName();
            const card = {
                name: result,
                img: `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${result}`,
                clicked: false
            };
            newCards.push(card);
            setCards(newCards);
        }
    }

    useEffect(() => {
        // renders only once, actually twice in dev bcs strictMode
        getAvatars();
    }, []);

    function resetGame () {
        if(score > highscore){
            setHighscore(score);
        }
        setScore(0);
        const resetCards = shuffleArray(cards.map(card => ({ ...card, clicked: false })));
        setCards(resetCards);
    }

    function handleClick(index) {
        if(cards[index].clicked){
            console.log("Bad! Score: 0" );
            resetGame();
        }
        else{
            setScore(score + 1);
            console.log("Good! Score: " + (score+1));
            const updatedCards = cards.map((card, i) => {
                if (i === index) {
                    return { ...card, clicked: true };
                }
                return card;
            });

            const shuffledCards = shuffleArray(updatedCards);
            setCards(shuffledCards);
        }
    }

    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    return(
        <>
            <Header score={score} highscore={highscore}/>
            <Board cards={cards} handleClick={handleClick} />
        </>
        
    )
}

export default Game