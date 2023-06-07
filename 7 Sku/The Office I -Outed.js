function outed(meet, boss) {
  let happiness = 0;
  const objectLength = Object.keys(meet).length;
  Object.keys(meet).forEach((key) => {
    if (key === boss) {
      happiness += meet[key] * 2;
    } else {
      happiness += meet[key];
    }
  });
  const totalHappiness = Math.ceil(happiness / objectLength);

  return totalHappiness <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

//alternative

function outed(meet, boss) {
  let names = Object.keys(meet);
  let score = names.reduce((s, v) => s + meet[v], 0) + meet[boss];
  return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
}
