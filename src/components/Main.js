import React, { useState, useEffect } from "react";
import { countPoints, getRanking, steps } from "../helpers/points";
import createLetters, { currentDate } from "../helpers/createLetters";
import Ranking from "./Ranking";
import Papa from "papaparse";
import CorrectGuesses from "./CorrectGuesses";
import Game from "./Game";
import Answers from "./Answers";

const Main = (props) => {
  const letters = localStorage.getItem("pangram")
    ? createLetters(localStorage.getItem("pangram"))[0]
    : [];
  const answers = localStorage.getItem("pangram")
    ? createLetters(localStorage.getItem("pangram"))[1]
    : [];
  const yesterdaysLetters = localStorage.getItem("yesterdaysPangram")
    ? createLetters(localStorage.getItem("yesterdaysPangram"))[0]
    : [];
  const yesterdaysAnswers = localStorage.getItem("yesterdaysPangram")
    ? createLetters(localStorage.getItem("yesterdaysPangram"))[1]
    : [];
  const simpleWords = answers.map((a) => a.replace(/-|’/g, ""));
  const maxPoints = simpleWords.reduce((acc, cur) => acc + countPoints(cur), 0);
  const [correctGuesses, setCorrectGuesses] = useState(() => {
    const saved = localStorage.getItem("correctGuesses");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [points, setPoints] = useState(
    correctGuesses.length > 0
      ? correctGuesses.reduce((acc, cur) => acc + countPoints(cur), 0)
      : 0
  );
  const [ranking, setRanking] = useState(getRanking(points, maxPoints));

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/1TyzfBf1CXMc079cB2L7peuBOpVroQA-OxAgBjLjKbso/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          let todaysPan = Array.from(results.data).find(
            (p) => p.date === currentDate(0)
          ).pangram;
          let yesterdaysPan = Array.from(results.data).find(
            (p) => p.date === currentDate(1)
          ).pangram;
          localStorage.setItem("pangram", todaysPan);
          localStorage.setItem("yesterdaysPangram", yesterdaysPan);
        },
      }
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("correctGuesses", JSON.stringify(correctGuesses));
  }, [correctGuesses]);

  useEffect(() => {
    setRanking(getRanking(points, maxPoints));
  }, [points, maxPoints]);

  const getText = () => {
    let emoji1 = "🔴";
    let rank = steps.indexOf(ranking) + 1;
    let extra = rank === 7 ? "🐞" : "";
    return `${
      rank === 0 ? "⁉️" : emoji1.repeat(rank)
    }${extra}%0D%0A7PP ${currentDate(0)}%0D%0ALöysin ${
      correctGuesses.length
    } sanaa ja%0D%0Asain ${points} pistettä.%0D%0Ahttps://ellamac.github.io/seitsenpistepirkko/`;
  };
  return letters.length === 0 ? (
    <></>
  ) : (
    <main className="mainMain">
      <Ranking points={points} maxPoints={maxPoints} ranking={ranking} />
      <CorrectGuesses
        maxWords={simpleWords.length}
        correctGuesses={correctGuesses}
        text={getText()}
      />
      <Game
        correctGuesses={correctGuesses}
        setCorrectGuesses={setCorrectGuesses}
        simpleWords={simpleWords}
        setPoints={setPoints}
        countPoints={countPoints}
        letters={letters}
        ranking={ranking}
      />
      <Answers letters={yesterdaysLetters} answers={yesterdaysAnswers} />
    </main>
  );
};

export default Main;
