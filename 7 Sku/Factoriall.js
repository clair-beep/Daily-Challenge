function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else if (n > 12 || n < 1) {
    throw RangeError;
  } else {
    return factorial(n - 1) * n;
  }
}

//alternative

function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}
