function vowelIndices(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  word = word.toLowerCase();
  let list = [];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      list.push(i + 1);
    }
  }
  return list;
}
