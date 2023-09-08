export const currentDate = (n) => {
  let date = new Date();
  date.setDate(date.getDate() + n);
  return date.toISOString().substring(0, 10);
};

export const steps = [
  { limit: 0, name: 'Lähtökuopissa' },
  { limit: 0.05, name: 'Etenee!' },
  { limit: 0.15, name: 'Peli vasta alkaa' },
  { limit: 0.35, name: 'Perin mahtavaa!' },
  { limit: 0.5, name: 'Ihmeellistä!' },
  { limit: 0.7, name: 'Supernero!' },
  { limit: 1.0, name: 'Whaat!? Löysit kaikki sanat!!' },
];

export const getRanking = (points, maxPoints) => {
  console.log('ranking1', points, maxPoints);
  return steps.find((s) => points <= maxPoints * s.limit);
};

export const isPangram = (word) => {
  const letters = [...new Set(word)];
  return letters.length === 7;
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
