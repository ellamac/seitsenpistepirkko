export const getRanking = (points, maxPoints) => {
  if (points >= maxPoints) return "Kaikki sanat löydetty!!";
  if (points >= maxPoints * 0.7) return "Nerokasta!";
  if (points >= maxPoints * 0.5) return "Ällistyttävää!";
  if (points >= maxPoints * 0.4) return "Mahtavaa!";
  if (points >= maxPoints * 0.25) return "Nais!";
  if (points >= maxPoints * 0.15) return "Vankka pohja";
  if (points >= maxPoints * 0.08) return "Hyvä!";
  if (points >= maxPoints * 0.05) return "Etenee!";
  if (points >= maxPoints * 0.02) return "Hyvä alku!";
  if (points >= 0) return "Aloittelija vielä!";
};
