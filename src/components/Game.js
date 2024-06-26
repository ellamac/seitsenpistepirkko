import React, { useState, useEffect } from 'react';
import Ladybug from './kukka';
import { countPoints } from '../helpers.js';

const Game = ({
  correctGuesses,
  setCorrectGuesses,
  setPoints,
  pangram,
  setLetters,
  ranking,
}) => {
  const [inputMessage, setInputMessage] = useState('');
  const [guess, setGuess] = useState('');

  useEffect(() => {
    //Runs on every render if ends with });
    //Runs only on the first render if ends with }, []);
    //Runs ion the first render and any time any dependency value changes if ends with }, [prop, state]);
  }, [ranking]);

  const addLetterToGuess = (letter) => () => {
    setInputMessage('');
    setGuess((prevLetters) => prevLetters.concat(letter.toUpperCase()));
  };
  const checkGuess = () => {
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
    clearGuess();
    setInputMessage(message);
    setTimeout(() => {
      setInputMessage('');
    }, '3000');
  };
  const clearGuess = () => {
    setGuess('');
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
      <p className='guessText'>{guess}</p>
      <Ladybug
        letters={pangram.letters}
        ranking={ranking}
        onClick={addLetterToGuess}
      />
      <section className='actionButtons'>
        {inputMessage.length > 0 ? (
          <p className='message'>{inputMessage}</p>
        ) : null}

        <button type='button' onClick={backspace}>
          Kumita
        </button>
        <button type='button' onClick={shuffleLetters}>
          Sekoita
        </button>
        <button type='button' onClick={checkGuess}>
          Vastaa
        </button>
      </section>
    </section>
  );
};

export default Game;
