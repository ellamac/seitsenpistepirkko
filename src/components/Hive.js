import React, { useEffect, useState } from "react";
import Ladybug from "./Ladybug.js";

const Hive = ({ letters, onLetterClick }) => {
  const [lets, setLets] = useState([]);
  const bigLetters = (ls) => ls.map((l) => (l ? l.toUpperCase() : l));
  useEffect(() => {
    setLets(bigLetters(letters));
    //Runs on every render if ends with });
    //Runs only on the first render if ends with }, []);
    //Runs ion the first render and any time any dependency value changes if ends with }, [prop, state]);
  }, [letters]);
  return (
    <section className="ladybug">
      <Ladybug letters={lets} onClick={onLetterClick} />
    </section>
  );
};

export default Hive;
