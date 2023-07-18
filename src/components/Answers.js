import React, { useState, useEffect } from "react";
import { isPangram } from "../helpers/pangram";

const Answers = ({ letters, answers, correctGuesses }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <section className="answers-main">
      <header>
        <h2>Vastaukset</h2>
        <button
          type="button"
          onClick={() => setShowAnswers((prevState) => !prevState)}
        >
          {showAnswers ? "Piilota vastaukset" : "Näytä vastaukset"}
        </button>
      </header>
      {showAnswers ? (
        <main className="answers">
          <p className="letters">
            Kirjaimet:{" "}
            {letters.length > 0 ? letters.map((l) => l + " ") : "...loading"}
          </p>
          <p className="info">
            Kirjaimista muodostuu {answers.length} suomenkielistä sanaa:
          </p>
          <section className="words">
            {answers.length > 0
              ? answers.sort().map((w, i) => (
                  <p
                    key={w + i}
                    className={`${
                      correctGuesses.includes(w) ||
                      correctGuesses.includes(w.toLowerCase)
                        ? "found"
                        : "notfound"
                    } ${isPangram(w) ? "isPangram" : "notPangram"}`}
                  >
                    {w}
                  </p>
                ))
              : "..loading"}
          </section>
        </main>
      ) : null}
    </section>
  );
};

export default Answers;
