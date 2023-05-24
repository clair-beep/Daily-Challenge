function orderedCount(str) {
  const charCount = new Map(); // Use a Map to store character counts

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // If the character is already in the Map, increment its count
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      // Otherwise, add it to the Map with a count of 1
      charCount.set(char, 1);
    }
  }

  // Convert the Map to a list of tuples in order of appearance
  const result = [];
  charCount.forEach((count, char) => {
    result.push([char, count]);
  });

  return result;
}
