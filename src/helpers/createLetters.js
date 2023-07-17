import { sanaObjects } from "../data/newData.js";
import { pangrams } from "../data/pangrams.js";

const allWords = sanaObjects;

export const createAnswerList = () => {
  let pangram = "";
  let letters = [];
  let words = [];
  let notOK = true;
  do {
    console.log("trying to find a good list");

    /*get random pangram from a list of pangrams */
    pangram = pangrams[Math.floor(Math.random() * pangrams.length)];

    /*list all the unique letters of the pangram and shuffle the list */
    letters = [...new Set(pangram.replace("-", "").split(""))];
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = letters[i];
      letters[i] = letters[j];
      letters[j] = temp;
    }

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
              (w) =>
                w.includes(a2[0]) && w.split("").every((l) => a2.includes(l))
            )
          );
      });
    });

    words = usableWords.flat();
    notOK = words.length > 10 && words.length < 100 ? false : true;
  } while (notOK);

  return [letters, words];
};

export default createAnswerList;
