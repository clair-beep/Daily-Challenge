// find k
//k == sum of the digits of n to the power of p incremental
// final result is to find if k is divisible by p

function digPow(n, p) {
  // ...
  let x = String(n)
    .split('')
    .reduce((acc, curr, index) => acc + Math.pow(curr, p + index), 0);
  let k = x / n;
  return k === Math.round(k) ? k : -1;
}
