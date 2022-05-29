//MY SOLUTION
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
//ALTERNATIVE 
function sum (numbers) {
    if (numbers === []) {
      return 0;
    } 
    else {
      return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0
    );
    }
};