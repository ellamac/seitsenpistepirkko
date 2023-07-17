import React, { useState, useEffect } from "react";
import Hive from "./Hive";
import { isPangram, countPoints } from "../helpers/pangram";
import createLetters from "../helpers/createLetters";
import Ranking from "./Ranking";

const Main = (props) => {
  const [letters, setLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [points, setPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);
  const [guess, setGuess] = useState("");
  const [showAnswers, setShowAnswers] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const startGame = () => {
    const [l, w] = createLetters();
    setGuess("");
    setAnswers([]);
    setLetters(l);
    setWords(w);
    setPoints(0);
    setShowAnswers(false);
    setMaxPoints(w.reduce((acc, cur) => acc + countPoints(cur), 0));
  };
  const addLetterToGuess = (letter) => () => {
    setGuess((prevLetters) => prevLetters.concat(letter));
  };

  const getRanking = () => {
    if (points >= maxPoints) return "Kaikki sanat löydetty!!";
    if (points >= maxPoints * 0.7) return "Nerokasta!";
    if (points >= maxPoints * 0.5) return "Ällistyttävää!";
    if (points >= maxPoints * 0.4) return "Mahtavaa!";
    if (points >= maxPoints * 0.25) return "Nais!";
    if (points >= maxPoints * 0.15) return "Vankka pohja";
    if (points >= maxPoints * 0.08) return "Hyvä!";
    if (points >= maxPoints * 0.05) return "Etenee!";
    if (points >= maxPoints * 0.02) return "Hyvä alku!";
    if (points >= 0) return "Aloittelija vielä!";
  };
  const checkGuess = () => {
    let message = "";
    let lowerCaseGuess = guess.toLowerCase();

    if (answers.includes(lowerCaseGuess) || answers.includes(guess)) {
      message = "jo löydetty :)";
    } else if (words.includes(lowerCaseGuess)) {
      setAnswers((prevArr) => [...prevArr, lowerCaseGuess].sort());
      setPoints((prev) => prev + countPoints(lowerCaseGuess));
      message = "Jee oikee sana!";
    } else if (lowerCaseGuess.length < 4) {
      message = "liian lyhyt sana";
    } else if (!lowerCaseGuess.includes(letters[0])) {
      message = "ei oo keskimmäistä kirjainta";
    } else {
      message = "ei oo sanalistassa";
    }

    setInputMessage(message);
    setTimeout(() => {
      setInputMessage("");
      clearGuess();
    }, "1000");
  };
  const clearGuess = () => {
    setGuess("");
  };
  const backspace = () => {
    setGuess((prev) => prev.substring(0, prev.length - 1));
  };

  const shuffleLetters = () => {
    let arr = [...letters];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i + 1);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    setLetters(arr);
  };
  return (
    <main>
      <section>
        {letters.length === 0 ? (
          <button onClick={startGame}>Aloita peli</button>
        ) : (
          <button onClick={startGame}>Arvo uudet kirjaimet</button>
        )}
      </section>

      <section>
        {letters.length === 0 ? (
          <></>
        ) : (
          <section className="stats">
            <Ranking maxPoints={maxPoints} />
            <section className="foundWords">
              <h2>Olet löytänyt {answers.length} sanaa:</h2>
              <p>
                Pisteitä: {points} ({getRanking()})
              </p>
              {answers.map((a, i) => (
                <p
                  className={isPangram(a) ? "isPangram" : "notPangram"}
                  key={a + i}
                >
                  {a}
                </p>
              ))}
            </section>
          </section>
        )}{" "}
        <section className="game">
          <section className="guess">
            <p className="guessText">{guess}</p>
          </section>
          <Hive letters={letters} onLetterClick={addLetterToGuess} />
          {letters.length === 0 ? (
            <></>
          ) : (
            <section className="actionButtons">
              <p className="message">{inputMessage}</p>
              <button type="button" onClick={checkGuess}>
                Vastaa
              </button>
              <button type="button" onClick={shuffleLetters}>
                Sekoita
              </button>
              <button type="button" onClick={backspace}>
                Poista
              </button>
              <button type="button" onClick={clearGuess}>
                Tyhjennä
              </button>
            </section>
          )}
        </section>
      </section>
      {letters.length === 0 ? (
        <></>
      ) : (
        <section className="answers-main">
          <h2>Vastaukset</h2>
          <button
            type="button"
            onClick={() => setShowAnswers((prevState) => !prevState)}
          >
            {showAnswers ? "Piilota vastaukset" : "Näytä vastaukset"}
          </button>
          {showAnswers ? (
            <section className="answers">
              <p className="letters">
                Kirjaimet:{" "}
                {letters.length > 0
                  ? letters.map((l) => l + " ")
                  : "...loading"}
              </p>
              <p className="info">
                Kirjaimista muodostuu {words.length} suomenkielistä sanaa:
              </p>
              <section className="words">
                {words.length > 0
                  ? words.sort().map((w, i) => (
                      <p
                        key={w + i}
                        className={`${
                          answers.includes(w) || answers.includes(w.toLowerCase)
                            ? "found"
                            : "notfound"
                        } ${isPangram(w) ? "isPangram" : "notPangram"}`}
                      >
                        {w}
                      </p>
                    ))
                  : "..loading"}
              </section>
            </section>
          ) : null}
        </section>
      )}
    </main>
  );
};

export default Main;
