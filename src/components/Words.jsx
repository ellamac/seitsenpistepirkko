import React from 'react';

import Word from './Word.jsx';
const Words = ({
  maxWords,
  correctGuesses,
  todaysPangram,
  showHints,
  setShowHints,
}) => {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <section className='words'>
      <header>
        <h2>
          Olet löytänyt {correctGuesses.length} / {maxWords} sanaa
        </h2>
      </header>
      <main>
        {todaysPangram.words.sort().map((w, i) => (
          <Word
            key={`word-${i}`}
            guessed={correctGuesses.includes(w)}
            w={w}
            showHints={showHints}
            handleScroll={handleScroll}
            number={i + 1}
          />
        ))}
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
