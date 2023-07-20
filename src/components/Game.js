import React, { useState, useEffect } from "react";
import Hive from "./Hive";
import { shuffleLetters } from "../helpers/words";
const Game = ({
  correctGuesses,
  setCorrectGuesses,
  simpleWords,
  setPoints,
  countPoints,
  letters,
  ranking,
}) => {
  const [inputMessage, setInputMessage] = useState("");
  const [guess, setGuess] = useState("");
  const [lettersOnLadyBug, setlettersOnLadyBug] = useState([]);

  useEffect(() => {
    setlettersOnLadyBug(letters);
  }, [letters]);

  const addLetterToGuess = (letter) => () => {
    setInputMessage("");
    setGuess((prevLetters) => prevLetters.concat(letter));
  };
  const checkGuess = () => {
    let message = "";
    let lowerCaseGuess = guess.toLowerCase();

    if (
      correctGuesses.includes(lowerCaseGuess) ||
      correctGuesses.includes(guess)
    ) {
      message = "jo löydetty :)";
    } else if (simpleWords.includes(lowerCaseGuess)) {
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

  return (
    <section className="game">
      <p className="guessText">{guess}</p>
      <Hive
        letters={lettersOnLadyBug}
        ranking={ranking}
        onLetterClick={addLetterToGuess}
      />
      <section className="actionButtons">
        {inputMessage.length > 0 ? (
          <p className="message">{inputMessage}</p>
        ) : null}

        <button type="button" onClick={backspace}>
          Kumita
        </button>
        <button
          type="button"
          onClick={() => setlettersOnLadyBug((prev) => shuffleLetters(prev))}
        >
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
