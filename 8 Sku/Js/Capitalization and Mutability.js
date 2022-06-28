//my solution 
function capitalizeWord(word) {
    return word
      .split(' ') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        word =>  word[0].toUpperCase() + word.slice(1))
      .join('');
  }
//alternative
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }