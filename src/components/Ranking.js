import React, { useState, useEffect } from "react";
import { countPoints } from "../helpers/pangram";

const Ranking = ({ maxPoints }) => {
  const [max, setMax] = useState(0);
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setMax(maxPoints);
    setHidden(true);
    //Runs on every render if ends with });
    //Runs only on the first render if ends with }, []);
    //Runs ion the first render and any time any dependency value changes if ends with }, [prop, state]);
  }, [maxPoints]);
  return (
    <section>
      <h2>Pisterajat</h2>
      {!hidden ? (
        <div>
          <p>Maksimipisteet: {max} p</p>
          <p>Nerokasta: {Math.floor(max * 0.7)} p</p>
          <p>Ällistyttävä: {Math.floor(max * 0.5)} p</p>
          <p>Mahtava: {Math.floor(max * 0.4)} p</p>
          <p>Nais: {Math.floor(max * 0.25)} p</p>
          <p>Vankka pohja: {Math.floor(max * 0.15)} p</p>
          <p>Hyvä: {Math.floor(max * 0.08)} p</p>
          <p>Etenee: {Math.floor(max * 0.05)} p</p>
          <p>Hyvä alku: {Math.floor(max * 0.02)} p</p>
          <p>Alottelija: 0 p</p>
        </div>
      ) : (
        <></>
      )}
      <button type="button" onClick={() => setHidden((prev) => !prev)}>
        {hidden ? "Näytä pisterajat" : "Piilota pisterajat"}
      </button>
    </section>
  );
};

export default Ranking;
