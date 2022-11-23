// solution 
function sumDigits(number) {
    let arr = Math.abs(number).toString().split('')
    let result = 0;
    for(let num of arr) {
      
      result += parseInt(num)
    }
    return result
  }
// alternative 
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }
