import React, { useState, useEffect } from 'react';
import { isPangram } from '../helpers.js';

const Answers = ({ pangram, today }) => {
  const [showAnswers, setShowAnswers] = useState(false);
  console.log('ans');

  const makeHintObjects = () => {
    const firstTwoLetters = today.words.map((w) => w.substring(0, 2));
    const counter = {};

    firstTwoLetters.forEach((ft) =>
      counter[ft] ? (counter[ft] += 1) : (counter[ft] = 1)
    );
    const uniquefts = Object.keys(counter);
    const ps = uniquefts.map((k) => (
      <p>
        {k}: {counter[k]}
      </p>
    ));
    return ps;
  };

  return (
    <section className='answers-main'>
      <header>
        <h2>Vastaukset ja vihjeet</h2>
        <button
          type='button'
          onClick={() =>
            setShowAnswers((prevState) =>
              prevState === 'hints' || prevState === false ? 'answers' : false
            )
          }
        >
          {showAnswers === 'answers'
            ? 'Piilota vastaukset'
            : 'Näytä edellisen pelin vastaukset'}
        </button>
        <button
          type='button'
          onClick={() =>
            setShowAnswers((prevState) =>
              prevState === 'answers' || prevState === false ? 'hints' : false
            )
          }
        >
          {showAnswers === 'hints' ? 'Piilota vihjeet' : 'Näytä vihjeet'}
        </button>
      </header>
      {showAnswers === 'answers' ? (
        !pangram.words ? (
          <main>
            <p>Et ole aikaisemmin pelannut peliä</p>
          </main>
        ) : (
          <main className='answers'>
            <p>Pelasit peliä viimeksi {pangram.date}</p>
            <p className='letters'>
              Kirjaimet:{' '}
              {pangram.letters?.length > 0
                ? pangram.letters?.map((l) => l + ' ')
                : '...loading'}
            </p>
            <p className='info'>
              Kirjaimista muodostui {pangram.words?.length || 0} suomenkielistä
              sanaa.
            </p>
            <p>Löysit {pangram.guesses?.length || 0} sanaa</p>
            <section className='words'>
              {pangram.guesses?.length > 0
                ? pangram.guesses?.sort().map((w, i) => (
                    <a
                      href={`https://www.kielitoimistonsanakirja.fi/#/${w}`}
                      target='_blank'
                      rel='noreferrer'
                      key={w + i}
                      className={`${isPangram(w) ? 'isPangram' : 'notPangram'}`}
                    >
                      {w}
                    </a>
                  ))
                : ''}
            </section>
            <p>Et löytänyt {pangram.words?.length || 0} sanaa</p>
            <section className='words'>
              {pangram.words?.length > 0
                ? pangram.words
                    ?.filter((w) => !pangram.guesses?.includes(w))
                    ?.sort()
                    .map((w, i) => (
                      <a
                        href={`https://www.kielitoimistonsanakirja.fi/#/${w}`}
                        target='_blank'
                        rel='noreferrer'
                        key={w + i}
                        className={`${
                          isPangram(w) ? 'isPangram' : 'notPangram'
                        }`}
                      >
                        {w}
                      </a>
                    ))
                : ''}
            </section>
            <p>
              Klikkaamalla sanaa avautuu Kielitoimiston sanakirjan määritelmä
              uuteen ikkunaan.
            </p>
          </main>
        )
      ) : showAnswers === 'hints' ? (
        <main>{makeHintObjects()}</main>
      ) : null}
    </section>
  );
};

export default Answers;
