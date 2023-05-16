function sumCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
}

//Alternative
function sumCubes(n) {
  if (n == 1) {
    return n ** 3;
  } else {
    return n ** 3 + sumCubes(n - 1);
  }
}
