
//my solution 
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }
//alternative
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();