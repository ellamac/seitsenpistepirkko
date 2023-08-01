/* makes an array of words into a object ordered by first and second letter*/
/* returns
{
  a: {
    aa:["aamu", "aasi"...], ab:[...], ac:[...]
  },
  b: {
    ba:[...], be:[...]
  },
  ...
}*/
export const refactorWordList = (list) => {
  console.log("++REFACTORWORDLIST");

  const newList = {};
  let eka = "";
  let toka = "";

  list.forEach((word) => {
    let e = word.substring(0, 1).toLowerCase();
    let t = word.substring(1, 2).toLowerCase();

    if (e !== eka) {
      eka = e;
      toka = t;
      newList[e] = { [e + t]: [word] };
    } else if (e === eka && t !== toka) {
      toka = t;
      newList[e][e + t] = [word];
    } else {
      newList[e][e + t].push(word);
    }
  });

  return newList;
};

export default refactorWordList;
