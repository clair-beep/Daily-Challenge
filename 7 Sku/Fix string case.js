//solution
function solve(s){
    let countLowerCase = 0;
    let countUpperCase = 0;
    let charLowerCase = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z',
    'h'
  ]
    let charUpperCase =  [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z',
    'H'
  ]
  
    for(let char of s) {
      if (charLowerCase.includes(char)) {
        countLowerCase++
      } else {
        countUpperCase++
      }
    }
  
    if (countLowerCase < countUpperCase ) {
      return s.toUpperCase()
    } else  {
    return s.toLowerCase()
    }
  }

//alternative 

function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}