import React, { useState, useEffect } from "react";
import { getRanking } from "../helpers/points";
import { isPangram } from "../helpers/pangram";
const CorrectGuesses = ({ correctGuesses, points, maxPoints }) => {
  return (
    <section className="foundWords">
      <heaeder>
        <h2>Olet löytänyt {correctGuesses.length} sanaa:</h2>
        <p>
          Pisteitä: {points} ({getRanking(points, maxPoints)})
        </p>
      </heaeder>
      <main>
        {correctGuesses.map((a, i) => (
          <p className={isPangram(a) ? "isPangram" : "notPangram"} key={a + i}>
            {a}
          </p>
        ))}
      </main>
    </section>
  );
};

export default CorrectGuesses;
