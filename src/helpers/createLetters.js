import { sanaObjects } from "../data/newData.js";
import { shuffleLetters } from "./pangram.js";

const allWords = sanaObjects;

export const currentDate = () => {
  const date = new Date();

  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  // we will display the date as YYYY-MM-DD
  let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

  console.log("The current date is " + currentDate);
  return currentDate;
};

export const createAnswerList = (pangram) => {
  let letters = [];
  let words = [];

  /*list all the unique letters of the pangram and shuffle the list */
  letters = [...new Set(pangram.replace(/-|’/g, "").split(""))];
  letters = shuffleLetters(letters);

  /*make a list of all the words that can be made up from the pangram's letters */
  let usableWords = [];

  letters.forEach((l1, i, a1) => {
    a1.forEach((l2, j, a2) => {
      /*sanatlistat joiden sanojen kaks ekaa kirjainta on valitussa 7 kirjaimen listassa */
      let partArray = allWords[l1][l1 + l2];
      /*jos sanalista on olemassa, käydään sanat läpi ja ne joissa on vaan valittuja kirjaimia lisätään taulukkoon */
      if (partArray)
        usableWords.push(
          partArray.filter(
            (w) => w.includes(a2[0]) && w.split("").every((l) => a2.includes(l))
          )
        );
    });
  });

  words = usableWords.flat();

  return [letters, words];
};

export default createAnswerList;
