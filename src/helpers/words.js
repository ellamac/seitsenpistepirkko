import { pangramData } from "../data/pangrams.js";

export const isPangram = (word) => {
  return pangramData.includes(word);
};

export const shuffleLetters = (letters) => {
  let first = [letters[0]];
  let allButFirst = letters.slice(1);

  for (let i = allButFirst.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = allButFirst[i];
    allButFirst[i] = allButFirst[j];
    allButFirst[j] = temp;
  }

  return first.concat(allButFirst);
};
