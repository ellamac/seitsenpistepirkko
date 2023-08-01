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
            <a
              href={`https://www.kielitoimistonsanakirja.fi/#/${a}`}
              target="_blank"
              rel="noreferrer"
              key={a + i}
              className={`${isPangram(a) ? "isPangram" : "notPangram"}`}
            >
              {a}
            </a>
          ))}
        </main>
        {correctGuesses.length > 0 ? (
          <footer>
            <a href={`whatsapp://send?text=${text}`}>
              Jaa tulokset Whatsappissa!
            </a>
            <p>
              Klikkaamalla sanaa avautuu Kielitoimiston sanakirjan määritelmä
              uuteen ikkunaan.
            </p>
          </footer>
        ) : (
          <></>
        )}
      </button>
    </section>
  );
};

export default CorrectGuesses;
