const isPowerOfTwo = (num = 1) => {
  if (num < 1) {
    return false;
  }
  return (num & (num - 1)) === 0;
};

//alternative:

function isPowerOfTwo(n) {
  if (n == 1) return true;
  if (n < 1) return false;

  return isPowerOfTwo(n / 2);
}
