import { isPangram } from "./words";

export const steps = [
  { limit: 0, name: "Kokeilija vielä" },
  { limit: 0.02, name: "Ihan ookoo" },
  { limit: 0.05, name: "Right on!" },
  { limit: 0.08, name: "Peli vasta alkaa!" },
  { limit: 0.15, name: "Perin mahtavaa" },
  { limit: 0.25, name: "Uskomatonta" },
  { limit: 0.4, name: "Petoainesta" },
  { limit: 0.5, name: "Erittäin hyvä" },
  { limit: 0.7, name: "Tajunnanräjäyttävää!" },
  { limit: 1.0, name: "Oikea kirppupeto! Löysit kaikki sanat!" },
];

export const getRanking = (points, maxPoints) => {
  return steps.find((s) => points >= Math.floor(maxPoints * s.limit)).name;
};

export const countPoints = (word) => {
  let len = word.length;
  let isPan = isPangram(word);
  if (len < 5) {
    return 1;
  } else if (isPan) {
    return len + 7;
  } else {
    return len;
  }
};
