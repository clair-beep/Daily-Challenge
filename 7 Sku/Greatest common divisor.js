// My solution

function mygcd(x, y) {
  const nearest_sq_x = Math.round(Math.sqrt(x));
  const nearest_sq_y = Math.round(Math.sqrt(y));
  let allFactors_x = [];
  let allFactors_y = [];

  for (let factorPair_x = 1; factorPair_x <= nearest_sq_x; factorPair_x++) {
    let correspondingFactorPair = x / factorPair_x;
    if (correspondingFactorPair % 1 == 0) {
      allFactors_x.push(correspondingFactorPair, factorPair_x);
    }
  }
  for (let factorPair_y = 1; factorPair_y <= nearest_sq_y; factorPair_y++) {
    let correspondingFactorPair = y / factorPair_y;
    if (correspondingFactorPair % 1 == 0) {
      allFactors_y.push(correspondingFactorPair, factorPair_y);
    }
  }

  const intersection = allFactors_x.filter(element =>
    allFactors_y.includes(element)
  );
  return Math.max(...intersection);
}
