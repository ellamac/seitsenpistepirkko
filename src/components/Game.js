import React, { useState } from "react";
import Ladybug from "./Ladybug";
import { countPoints } from "../helpers/points";

const Game = ({
  correctGuesses,
  setCorrectGuesses,
  answers,
  setPoints,
  letters,
  setLetters,
  ranking,
}) => {
  const [inputMessage, setInputMessage] = useState("");
  const [guess, setGuess] = useState("");

  const addLetterToGuess = (letter) => () => {
    setInputMessage("");
    setGuess((prevLetters) => prevLetters.concat(letter.toUpperCase()));
  };
  const checkGuess = () => {
    let message = "";
    let lowerCaseGuess = guess.toLowerCase();

    if (
      correctGuesses.includes(lowerCaseGuess) ||
      correctGuesses.includes(guess)
    ) {
      message = "jo löydetty :)";
    } else if (answers.includes(lowerCaseGuess)) {
      setCorrectGuesses((prevArr) => [...prevArr, lowerCaseGuess].sort());
      setPoints((prev) => prev + countPoints(lowerCaseGuess));
      message = "Jee oikee sana!";
    } else if (lowerCaseGuess.length < 4) {
      message = "liian lyhyt sana";
    } else if (!lowerCaseGuess.includes(letters[0])) {
      message = "ei oo keskimmäistä kirjainta";
    } else {
      message = "ei oo sanalistassa";
    }
    clearGuess();
    setInputMessage(message);
    setTimeout(() => {
      setInputMessage("");
    }, "3000");
  };
  const clearGuess = () => {
    setGuess("");
  };
  const backspace = () => {
    setGuess((prev) => prev.substring(0, prev.length - 1));
  };

  const shuffleLetters = () => {
    let first = [letters[0]];
    let allButFirst = [...letters.slice(1)];

    for (let i = allButFirst.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = allButFirst[i];
      allButFirst[i] = allButFirst[j];
      allButFirst[j] = temp;
    }

    setLetters(first.concat(allButFirst));
  };
  return (
    <section className="game">
      <p className="guessText">{guess}</p>
      <Ladybug letters={letters} ranking={ranking} onClick={addLetterToGuess} />
      <section className="actionButtons">
        {inputMessage.length > 0 ? (
          <p className="message">{inputMessage}</p>
        ) : null}

        <button type="button" onClick={backspace}>
          Kumita
        </button>
        <button type="button" onClick={shuffleLetters}>
          Sekoita
        </button>
        <button type="button" onClick={checkGuess}>
          Vastaa
        </button>
      </section>
    </section>
  );
};

export default Game;
