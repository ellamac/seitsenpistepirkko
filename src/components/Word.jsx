import React, { useEffect, useRef } from 'react';
import { isPangram } from '../helpers';

const Word = ({ guessed, w, showHints, handleScroll, number }) => {
  const wordRef = useRef(null);
  const hasPageBeenRendered = useRef(false);

  useEffect(() => {
    if (hasPageBeenRendered.current) {
      handleScroll(wordRef);
    }

    hasPageBeenRendered.current = true;
  }, [guessed]);

  return guessed ? (
    <a
      ref={wordRef}
      href={`https://www.kielitoimistonsanakirja.fi/#/${w}`}
      target='_blank'
      rel='noreferrer'
      className={`${isPangram(w) ? 'word isPangram' : 'word notPangram'}`}
    >
      {number}. {w}
    </a>
  ) : (
    <p className='word' ref={wordRef}>
      {number}. {w.substring(0, showHints)}
      {'_'.repeat(w.length - showHints)}
    </p>
  );
};

export default Word;
