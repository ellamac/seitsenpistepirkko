import React, { useState, useEffect } from 'react';
import { countPoints, getRanking, steps, currentDate } from '../helpers.js';
import Ranking from './Ranking';

import CorrectGuesses from './CorrectGuesses';
import Game from './Game';
import Answers from './Answers';
import pangrams from '../data/pangrams.js';

const Main = (props) => {
  const current = currentDate(0);
  const [todaysPangram, setTodaysPangram] = useState(
    pangrams.find((obj) => obj.date === current) || null
  );
  const [lastPangram, setLastPangram] = useState(
    JSON.parse(localStorage.getItem('lastPangram')) ||
      pangrams.find((obj) => obj.date === currentDate(-1)) ||
      null
  );
  const maxPoints =
    todaysPangram.words.reduce((acc, cur) => acc + countPoints(cur), 0) || 0;
  const [correctGuesses, setCorrectGuesses] = useState(
    () => JSON.parse(localStorage.getItem('correctGuesses')) || []
  );
  const [points, setPoints] = useState(
    correctGuesses.length > 0
      ? correctGuesses.reduce((acc, cur) => acc + countPoints(cur), 0)
      : 0
  );
  const [ranking, setRanking] = useState(getRanking(points, maxPoints));

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit') || false;
    // if last visit is different from todays date,
    // make lastPangram pangram of that date and add guesses to it
    if (lastVisit && lastVisit !== current) {
      setLastPangram({
        ...pangrams.find((p) => p.date === lastVisit),
        guesses: correctGuesses,
      });
      localStorage.setItem(
        'lastPangram',
        JSON.stringify({
          ...pangrams.find((p) => p.date === lastVisit),
          guesses: correctGuesses,
        })
      );
      setCorrectGuesses([]);
      setPoints(0);
    }
    localStorage.setItem('lastVisit', current);
    setTodaysPangram(pangrams.find((obj) => obj.date === current) || null);
  }, []);

  useEffect(() => {
    localStorage.setItem('correctGuesses', JSON.stringify(correctGuesses));
  }, [correctGuesses]);

  useEffect(() => {
    setRanking(getRanking(points, maxPoints));
  }, [points, maxPoints]);

  const getText = () => {
    let emoji1 = '🐞';
    let rank = steps.indexOf(ranking);
    let text = `${
      rank === 0 ? '⁉️' : emoji1.repeat(rank)
    }%0D%0A7PP ${current}%0D%0ALöysin ${
      correctGuesses.length
    } sanaa ja%0D%0Asain ${points} pistettä.%0D%0Ahttps://ellamac.github.io/seitsenpistepirkko/`;
    return text;
  };
  return todaysPangram.letters.length === 0 ? (
    <h2>🐞 jotain meni pieleen 🐞</h2>
  ) : (
    <main className='mainMain'>
      <Ranking points={points} maxPoints={maxPoints} ranking={ranking} />
      <CorrectGuesses
        maxWords={todaysPangram.words.length}
        correctGuesses={correctGuesses}
        text={getText()}
      />
      <Game
        correctGuesses={correctGuesses}
        setCorrectGuesses={setCorrectGuesses}
        pangram={todaysPangram}
        setPoints={setPoints}
        setLetters={(newOrder) =>
          setTodaysPangram((prev) => {
            return { ...prev, letters: newOrder };
          })
        }
        ranking={ranking}
      />
      <Answers pangram={lastPangram} today={todaysPangram} />
    </main>
  );
};

export default Main;
