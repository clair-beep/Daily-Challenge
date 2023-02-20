function longestRepetition(s) {
  let max = 1,
    currLength = 1,
    prev = s[0];
  let maxChar = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === prev) {
      currLength++;
    } else if (max < currLength) {
      prev = s[i];
      maxChar = s[i - 1];
      max = Math.max(currLength, max);
      currLength = 1;
    } else {
      prev = s[i];
      max = Math.max(currLength, max);
      currLength = 1;
    }
  }
  return [maxChar, max];
}
