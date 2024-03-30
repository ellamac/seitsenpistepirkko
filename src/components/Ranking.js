import React, { useState, useEffect } from 'react';
import { steps } from '../helpers.js';
const Ranking = ({ maxPoints, points }) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setHidden(true);
    //Runs on every render if ends with });
    //Runs only on the first render if ends with }, []);
    //Runs ion the first render and any time any dependency value changes if ends with }, [prop, state]);
  }, [maxPoints]);

  return (
    <section className='ranking'>
      <button
        className={`steps ${hidden ? 'hidden' : 'visible'}`}
        type='button'
        onClick={() => setHidden((prev) => !prev)}
      >
        <p className='points'>
          {points} {points.length === 1 ? 'piste' : 'pistettä'}
        </p>
        <section className='ranks'>
          {steps.map((s, i) => (
            <p
              key={s + i}
              className={`rank ${
                points >= Math.floor(maxPoints * s.limit) ? 'current' : ''
              }`}
            >
              {s.name.substring(0, 1)}
              <span className='extra'>
                {s.name.substring(1)}: {Math.floor(maxPoints * s.limit)} p
              </span>
            </p>
          ))}
        </section>
      </button>
    </section>
  );
};

export default Ranking;
