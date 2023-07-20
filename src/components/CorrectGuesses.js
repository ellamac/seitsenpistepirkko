import React, { useState } from "react";
import { getRanking } from "../helpers/points";
import { isPangram } from "../helpers/words";
const CorrectGuesses = ({ maxWords, correctGuesses }) => {
  const [show, setShow] = useState(false);
  return (
    <section className="correctGuesses">
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className={show ? "visible" : "hidden"}
      >
        <header>
          <h2>
            Olet löytänyt {correctGuesses.length} / {maxWords} sanaa
            {}
          </h2>
        </header>
        <main>
          {correctGuesses.map((a, i) => (
            <p
              className={isPangram(a) ? "isPangram" : "notPangram"}
              key={a + i}
            >
              {" "}
              {a}
            </p>
          ))}
        </main>
      </button>
    </section>
  );
};

export default CorrectGuesses;
