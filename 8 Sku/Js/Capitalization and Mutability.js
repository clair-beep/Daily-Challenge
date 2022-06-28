//my solution 
function capitalizeWord(word) {
    return word
      .split(' ')
      .map(
      
        word =>  word[0].toUpperCase() + word.slice(1))
      .join('');
  }
//alternative
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }