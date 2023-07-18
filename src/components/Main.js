import React, { useState, useEffect } from "react";
import { countPoints } from "../helpers/points";
import createLetters, { currentDate } from "../helpers/createLetters";
import Ranking from "./Ranking";
import Papa from "papaparse";
import CorrectGuesses from "./CorrectGuesses";
import Game from "./Game";
import Answers from "./Answers";

const Main = (props) => {
  const [letters, setLetters] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [points, setPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);
  const [simpleWords, setSimpleWords] = useState([]); /*words without - an '*/

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/1TyzfBf1CXMc079cB2L7peuBOpVroQA-OxAgBjLjKbso/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          console.log("PAPA", results.data);
          let pan = Array.from(results.data).find(
            (p) => p.date === currentDate()
          ).pangram;
          const [l, w] = createLetters(pan);
          setLetters(l);
          setAnswers(w);
          setMaxPoints(w.reduce((acc, cur) => acc + countPoints(cur), 0));
          setSimpleWords(w.map((w) => w.replace(/-|’/g, "")));
        },
      }
    );

    //Runs on every render if ends with });
    //Runs only on the first render if ends with }, []);
    //Runs ion the first render and any time any dependency value changes if ends with }, [prop, state]);
  }, []);

  return letters.length === 0 ? (
    <></>
  ) : (
    <main>
      <Ranking maxPoints={maxPoints} points={points} />
      <CorrectGuesses
        points={points}
        maxPoints={maxPoints}
        correctGuesses={correctGuesses}
      />
      <Game
        correctGuesses={correctGuesses}
        setCorrectGuesses={setCorrectGuesses}
        simpleWords={simpleWords}
        setPoints={setPoints}
        countPoints={countPoints}
        letters={letters}
      />
      <Answers
        letters={letters}
        answers={answers}
        correctGuesses={correctGuesses}
      />
    </main>
  );
};

export default Main;
