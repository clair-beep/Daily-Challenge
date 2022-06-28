//my solution 

//alternative
function shortcut(string) {
    let vowelsCount = [];
    
  const vowels = ["a", "e", "i", "o", "u"]
  
      for (let letter of string) {
          if (vowels.includes(letter)) {
            vowelsCount.push(letter);
          }
      }
  
      // return number of vowels
      return vowelsCount;
  }