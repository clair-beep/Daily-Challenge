// My solution 
const squareDigits = num => +num.toString().split("").map(x => x ** 2).join("");
//alternative
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }