import React, { useState, useEffect, useRef } from 'react';
import Gameboard from './Gameboard.js';
import { countPoints } from '../helpers.js';

const Game = ({
  correctGuesses,
  setCorrectGuesses,
  setPoints,
  pangram,
  setLetters,
  ranking,
  gameLayout,
  setGameLayout,
}) => {
  const [inputMessage, setInputMessage] = useState('');
  const [guess, setGuess] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const timerId = useRef(null);
  useEffect(() => {
    console.log('ranking', ranking);
    //Runs on every render if ends with });
    //Runs only on the first render if ends with }, []);
    //Runs ion the first render and any time any dependency value changes if ends with }, [prop, state]);
  }, [ranking]);

  const addLetterToGuess = (letter) => () => {
    if (showMessage) {
      clearTimeout(timerId.current);
      setShowMessage(false);
      setGuess('');
      setInputMessage('');
      setShowMessage(false);
    }
    setGuess((prevLetters) => prevLetters.concat(letter.toUpperCase()));
  };
  const checkGuess = () => {
    setShowMessage(true);
    let message = '';
    let lowerCaseGuess = guess.toLowerCase();
    if (
      correctGuesses.includes(lowerCaseGuess) ||
      correctGuesses.includes(guess)
    ) {
      message = 'jo löydetty :)';
    } else if (pangram.words.includes(lowerCaseGuess)) {
      setCorrectGuesses((prevArr) => [...prevArr, lowerCaseGuess].sort());
      setPoints((prev) => prev + countPoints(lowerCaseGuess));
      message = 'Jee oikee sana!';
    } else if (lowerCaseGuess.length < 4) {
      message = 'liian lyhyt sana';
    } else if (!lowerCaseGuess.includes(pangram.letters[0])) {
      message = 'ei oo keskimmäistä kirjainta';
    } else {
      message = 'ei oo sanalistassa';
    }
    setInputMessage(message);
    timerId.current = setTimeout(() => {
      setGuess('');
      setInputMessage('');
      setShowMessage(false);
    }, 3000);
  };

  const clearGuess = () => {
    setGuess('');
  };
  const changeUI = () => {
    setGameLayout((prev) => (prev === 'ladybug' ? 'flower' : 'ladybug'));
  };
  const backspace = () => {
    setGuess((prev) => prev.substring(0, prev.length - 1));
  };

  const shuffleLetters = () => {
    let first = [pangram.letters[0]];
    let allButFirst = [...pangram.letters.slice(1)];

    for (let i = allButFirst.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = allButFirst[i];
      allButFirst[i] = allButFirst[j];
      allButFirst[j] = temp;
    }

    setLetters(first.concat(allButFirst));
  };

  if (!pangram || !correctGuesses) return <p>Jotain meni pieleen</p>;
  return (
    <section className='game'>
      <section className={`messages ${gameLayout}`}>
        <p className={`message ${inputMessage ? 'visible' : 'hidden'}`}>
          {inputMessage}
        </p>
        <p className='guessText'>{guess}</p>
      </section>
      <Gameboard
        gameLayout={gameLayout}
        letters={pangram.letters}
        ranking={ranking}
        onClick={addLetterToGuess}
      />
      <section className='actionButtons fullwidth'>
        <button className='answer fullwidth' type='button' onClick={checkGuess}>
          Vastaa
        </button>
      </section>
      <section className='actionButtons'>
        <button className='clear' type='button' onClick={clearGuess}>
          Tyhjennä
        </button>
        <button className='backspace' type='button' onClick={backspace}>
          Kumita
        </button>
        <button className='change' type='button' onClick={changeUI}>
          Vaihda pelilautaa
        </button>
        <button className='shuffle' type='button' onClick={shuffleLetters}>
          Sekoita
        </button>
      </section>
    </section>
  );
};

export default Game;
