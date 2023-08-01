import React, { useState, useEffect } from "react";
import { countPoints, getRanking, steps } from "../helpers/points";
import createLetters, { currentDate } from "../helpers/createLetters";
import Ranking from "./Ranking";
import Papa from "papaparse";
import CorrectGuesses from "./CorrectGuesses";
import Game from "./Game";
import Answers from "./Answers";

const Main = (props) => {
  useEffect(() => {
    console.log("MAIN");
  });

  const [letters, setLetters] = useState(() =>
    localStorage.getItem("pangram") &&
    localStorage.getItem("pangram").length === 7
      ? createLetters(localStorage.getItem("pangram"))[0]
      : []
  );
  let answers =
    localStorage.getItem("pangram") &&
    localStorage.getItem("pangram").length === 7
      ? createLetters(localStorage.getItem("pangram"))[1]
      : [];
  const [yesterdaysLetters, yesterdaysAnswers] =
    localStorage.getItem("yesterdaysPangram") &&
    localStorage.getItem("yesterdaysPangram").length === 7
      ? createLetters(localStorage.getItem("yesterdaysPangram"))
      : [[], []];
  const maxPoints = answers.reduce((acc, cur) => acc + countPoints(cur), 0);
  const [correctGuesses, setCorrectGuesses] = useState(
    () => JSON.parse(localStorage.getItem("correctGuesses")) || []
  );
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
          console.log("COMPLETE");
          let todaysDate = currentDate(0);
          let yesterdaysDate = currentDate(1);
          let todaysPan = results.data.find(
            (p) => p.date === todaysDate
          ).pangram;
          let yesterdaysPan = results.data.find(
            (p) => p.date === yesterdaysDate
          ).pangram;
          if (
            localStorage.getItem("pangram") &&
            todaysPan !== localStorage.getItem("pangram")
          ) {
            setCorrectGuesses([]);
            setPoints(0);
          }
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
    let rank = steps.indexOf(ranking);
    let extra = rank === 7 ? "🐞" : "";
    let text = `${
      rank === 0 ? "⁉️" : emoji1.repeat(rank)
    }${extra}%0D%0A7PP ${currentDate(0)}%0D%0ALöysin ${
      correctGuesses.length
    } sanaa ja%0D%0Asain ${points} pistettä.%0D%0Ahttps://ellamac.github.io/seitsenpistepirkko/`;
    return text;
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
        letters={letters}
        setLetters={setLetters}
        ranking={ranking}
      />
      <Answers letters={yesterdaysLetters} answers={yesterdaysAnswers} />
    </main>
  );
};

export default Main;
