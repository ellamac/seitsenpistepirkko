import React, { useState, useEffect } from 'react';
import { isPangram } from '../helpers.js';
const Words = ({
  maxWords,
  correctGuesses,
  todaysPangram,
  showHints,
  setShowHints,
}) => {
  return (
    <section className='words'>
      <header>
        <h2>
          Olet löytänyt {correctGuesses.length} / {maxWords} sanaa
        </h2>
      </header>
      <main>
        {todaysPangram.words.sort().map((w, i) =>
          correctGuesses.includes(w) ? (
            <a
              href={`https://www.kielitoimistonsanakirja.fi/#/${w}`}
              target='_blank'
              rel='noreferrer'
              key={`word-${i}`}
              className={`${
                isPangram(w) ? 'word isPangram' : 'word notPangram'
              }`}
            >
              {w}
            </a>
          ) : (
            <p key={`word-${i}`} className='word'>
              {w.substring(0, showHints)}
              {'_'.repeat(w.length - showHints)}
            </p>
          )
        )}
      </main>
      <footer>
        <button
          type='button'
          disabled={showHints < 2 ? false : true}
          onClick={() => {
            if (showHints < 2) setShowHints((prev) => prev + 1);
          }}
        >
          {showHints == 0
            ? 'paljasta ensimmäinen kirjain'
            : showHints == 1
            ? 'paljasta toinen kirjain'
            : 'kaikki vihjeet käytetty'}
        </button>
      </footer>
    </section>
  );
};

export default Words;
