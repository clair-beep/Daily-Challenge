//ALTERNATIVE

function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
  }
// MY SOLUTION
// gigen an array with numbers

//return an array with only pair numbers
// if therse are none return empty array 

// [1,2,3,6,8,10]) returns [2,6,8,10]

// 
const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 === 0)