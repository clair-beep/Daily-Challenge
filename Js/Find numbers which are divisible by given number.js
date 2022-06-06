//MY SOLUTION 
function divisibleBy(numbers, divisor) {
    let final = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor === 0) {
        final.push(numbers[i]);
      }
      
    }
    return final;
  
  }
//ALTERNATIVE
function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }