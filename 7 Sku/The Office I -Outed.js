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
