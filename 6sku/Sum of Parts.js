//SOlution
function partsSums(ls) {
  const result = [];
  let sum = 0;

  // Calculate the total sum of the ls array
  ls.forEach((num) => {
    sum += num;
  });

  // Calculate the cumulative sum from the end to the beginning
  ls.forEach((num) => {
    result.push(sum);
    sum -= num;
  });

  // Add the final 0 to the result list
  result.push(0);

  return result;
}

// ALternative
function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map((v) => (sum = sum - v));
}
