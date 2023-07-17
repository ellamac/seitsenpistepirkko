import React, { useState, useEffect } from "react";
import { countPoints } from "../helpers/pangram";

const Ranking = ({ maxPoints, points }) => {
  const [max, setMax] = useState(0);
  const [hidden, setHidden] = useState(true);
  const steps = [
    { limit: 0, name: "Alottelija" },
    { limit: 0.02, name: "Hyvä alku" },
    { limit: 0.05, name: "Etenee" },
    { limit: 0.08, name: "Hyvä" },
    { limit: 0.15, name: "Vankka pohja" },
    { limit: 0.25, name: "Nais" },
    { limit: 0.4, name: "Mahtava" },
    { limit: 0.5, name: "Ällistyttävä" },
    { limit: 0.7, name: "Nerokasta" },
  ];
  useEffect(() => {
    setMax(maxPoints);
    setHidden(true);
    //Runs on every render if ends with });
    //Runs only on the first render if ends with }, []);
    //Runs ion the first render and any time any dependency value changes if ends with }, [prop, state]);
  }, [maxPoints]);

  const pointSteps = (step) => {
    return (
      <p className={points >= maxPoints * step.limit ? "current" : ""}>
        {step.name}
      </p>
    );
  };
  return (
    <section className="ranking">
      <button type="button" onClick={() => setHidden((prev) => !prev)}>
        <div className="steps">{steps.map((s) => pointSteps(s))}</div>
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
      </button>
    </section>
  );
};

export default Ranking;
