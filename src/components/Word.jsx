import React, { useState, useEffect, useRef } from 'react';
import { isPangram } from '../helpers';

const Word = ({ guessed, w, showHints, handleScroll, number }) => {
  const wordRef = useRef(null);
  const hasPageBeenRendered = useRef(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (hasPageBeenRendered.current) {
      handleScroll(wordRef);
    }

    hasPageBeenRendered.current = true;
    setFlash((prev) => !prev);
    setTimeout(() => {
      setFlash((prev) => !prev);
    }, 5000);
  }, [guessed]);

  return guessed ? (
    <a
      ref={wordRef}
      href={`https://www.kielitoimistonsanakirja.fi/#/${w}`}
      target='_blank'
      rel='noreferrer'
      className={`${isPangram(w) ? 'word isPangram' : 'word notPangram'} ${
        flash ? 'flash' : ''
      }`}
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
