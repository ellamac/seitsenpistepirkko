import React, { useState, useEffect } from "react";
import { isPangram } from "../helpers/words";
const CorrectGuesses = ({ maxWords, correctGuesses, text }) => {
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
        <a href={`whatsapp://send?text=${text}`}>Jaa tulokset Whatsappissa!</a>
      </button>
    </section>
  );
};

export default CorrectGuesses;
