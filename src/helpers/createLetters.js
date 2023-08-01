import { sanaObjects } from "../data/newData.js";

const allWords = sanaObjects;

export const currentDate = (n) => {
  console.log("++CURRENTDATE");
  const date = new Date();
  date.setDate(date.getDate() - n);
  let currentDate = date.toISOString().split("T")[0];
  return currentDate;
};

export const createAnswerList = (pangram) => {
  console.log("++CREATEANSWERLIST");

  let letters = [];
  let words = [];

  /*list all the unique letters of the pangram and shuffle the list */
  letters = [...new Set(pangram.replace(/"/g, "").split(""))];

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
