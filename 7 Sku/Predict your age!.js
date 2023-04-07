//solution
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let input = Array.from(arguments);
  let multiplyThemself = input.map((num) => num * num);
  let sumThemall = multiplyThemself.reduce((acc, cur) => (acc += cur));
  let squareTheResult = Math.sqrt(sumThemall);
  let divideItByTwo = squareTheResult / 2;
  let result = Math.floor(divideItByTwo);
  return result;
}
//alternative
const predictAge = (...ages) => (Math.hypot(...ages) / 2) | 0;
