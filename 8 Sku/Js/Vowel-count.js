//my solution 
function getCount(str) {
    let vowelsCount = 0;
    
  const vowels = ["a", "e", "i", "o", "u"]
  
      for (let letter of str) {
          if (vowels.includes(letter)) {
              vowelsCount++;
          }
      }
  
      // return number of vowels
      return vowelsCount;
  }
      //alternative

      function getCount(str) {
        return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
       }
