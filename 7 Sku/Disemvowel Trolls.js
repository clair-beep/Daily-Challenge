//my solution
function disemvowel(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    return str.split("").filter(item => !vowels(item))
     
  }
//alternative 
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}