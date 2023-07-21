import { isPangram } from "./words";

export const steps = [
  { limit: 0, name: "Lähtökuopissa" },
  { limit: 0.05, name: "Etenee!" },
  { limit: 0.15, name: "Peli vasta alkaa" },
  { limit: 0.35, name: "Perin mahtavaa!" },
  { limit: 0.5, name: "Ihmeellistä!" },
  { limit: 0.7, name: "Supernero!" },
  { limit: 1.0, name: "Whaat!? Löysit kaikki sanat!!" },
];

export const getRanking = (points, maxPoints) => {
  return steps.find((s) => points <= Math.floor(maxPoints * s.limit));
};

export const countPoints = (word) => {
  let len = word.length;
  let isPan = isPangram(word);
  if (len < 5) {
    return 1;
  } else if (isPan) {
    return len - 3 + 7;
  } else {
    return len - 3;
  }
};
