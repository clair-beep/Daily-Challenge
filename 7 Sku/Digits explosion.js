// MY SOLUTION 

// parameters => a string with a num 

// return =>  return a string where each digit is repeated a number of times equals to its value. 
// string must be in ascending order 

/* example explode("312") ==> "333122"
explode("102269") ==> "12222666666999999999"
*/

// make evryth)ng an arr
// return a new num repeat)Ng num times

function explode(s) {
    s = s.split('').map(element => {
      return    Number(element);
    });
  
    let explode = [];
    
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s[i]; j++) {
        explode.push(s[i])
      }
    }
  return explode.join('')
  }

  // ALTERNATIVE SOLUTION 

  function explode(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
  }