import React, { useState, useEffect } from "react";
import { countPoints, getRanking, steps } from "../helpers/points";
import createLetters, { currentDate } from "../helpers/createLetters";
import Ranking from "./Ranking";
import Papa from "papaparse";
import CorrectGuesses from "./CorrectGuesses";
import Game from "./Game";
import Answers from "./Answers";

const Main = (props) => {
  const [letters, answers] = localStorage.getItem("pangram")
    ? createLetters(JSON.parse(localStorage.getItem("pangram")).pangram)
    : [[], []];
  const [yesterdaysLetters, yesterdaysAnswers] = localStorage.getItem(
    "yesterdaysPangram"
  )
    ? createLetters(
        JSON.parse(localStorage.getItem("yesterdaysPangram")).pangram
      )
    : [[], []];
  const maxPoints = answers.reduce((acc, cur) => acc + countPoints(cur), 0);
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
          let todaysPan = results.data.find((p) => p.date === currentDate(0));
          let yesterdaysPan = results.data.find(
            (p) => p.date === currentDate(1)
          );
          if (
            todaysPan.pangram !==
            JSON.parse(localStorage.getItem("pangram")).pangram
          ) {
            setCorrectGuesses([]);
            setPoints(0);

            localStorage.setItem("pangram", JSON.stringify(todaysPan));
            localStorage.setItem(
              "yesterdaysPangram",
              JSON.stringify(yesterdaysPan)
            );
          }
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
        maxWords={answers.length}
        correctGuesses={correctGuesses}
        text={getText()}
      />
      <Game
        correctGuesses={correctGuesses}
        setCorrectGuesses={setCorrectGuesses}
        answers={answers}
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
