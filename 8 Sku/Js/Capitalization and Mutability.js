//my solution 
function shortcut(string) {
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