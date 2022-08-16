
// PARAMETERS =>  a number that represent the limit of our calculations 

// RETURN => n will return the sum of all multiples of 3 and 5 as a num 

// EXAMPLES => 
// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// PSEUDO CODE => create a loop and a conditional to evaluate if its a multiple 
// sum everything that complies with this

function findSum(n) {
    let sum = 0;
      for (let number = 0; number <= n; number++) {
        if (number % 3 === 0  || number % 5 === 0) 
        sum += number;
  }
  return sum;
  }