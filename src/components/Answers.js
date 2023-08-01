import React, { useState, useEffect } from "react";
import { isPangram } from "../helpers/words";

const Answers = ({ letters, answers }) => {
  const [showAnswers, setShowAnswers] = useState(false);
  useEffect(() => {
    console.log("ANSWERS");
  });
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
            Kirjaimista muodostui {answers.length} suomenkielistä sanaa.
          </p>
          <section className="words">
            {answers.length > 0
              ? answers.sort().map((w, i) => (
                  <a
                    href={`https://www.kielitoimistonsanakirja.fi/#/${w}`}
                    target="_blank"
                    rel="noreferrer"
                    key={w + i}
                    className={`${isPangram(w) ? "isPangram" : "notPangram"}`}
                  >
                    {w}
                  </a>
                ))
              : "..loading"}
          </section>
          <p>
            Klikkaamalla sanaa avautuu Kielitoimiston sanakirjan määritelmä
            uuteen ikkunaan.
          </p>
        </main>
      ) : null}
    </section>
  );
};

export default Answers;
