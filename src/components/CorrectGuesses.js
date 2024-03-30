import React, { useState } from 'react';
import { isPangram } from '../helpers.js';
const CorrectGuesses = ({ maxWords, correctGuesses }) => {
  const [show, setShow] = useState(false);

  return (
    <section className='correctGuesses'>
      <button
        type='button'
        onClick={() => setShow((prev) => !prev)}
        className={show ? 'visible' : 'hidden'}
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
              target='_blank'
              rel='noreferrer'
              key={a + i}
              className={`${isPangram(a) ? 'isPangram' : 'notPangram'}`}
            >
              {a}
            </a>
          ))}
        </main>
        {correctGuesses.length > 0 ? (
          <footer>
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
