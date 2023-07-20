import React, { useState } from "react";
import { isPangram } from "../helpers/words";

const Answers = ({ letters, answers }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <section className="answers-main">
      <header>
        <h2>Eilisen vastaukset</h2>
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
            Kirjaimista muodostui {answers.length} suomenkielistä sanaa:
          </p>
          <section className="words">
            {answers.length > 0
              ? answers.sort().map((w, i) => (
                  <p
                    key={w + i}
                    className={`${isPangram(w) ? "isPangram" : "notPangram"}`}
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
