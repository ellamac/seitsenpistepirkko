import { pangramData } from "../data/pangrams.js";

export const isPangram = (word) => {
  return pangramData.includes(word);
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
