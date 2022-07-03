//my solution
function removeSmallest(numbers) {
    const min = Math.min(...numbers);
    const index = numbers.indexOf(min);
    
    return numbers.filter((_, i) => i !== index);
  }
//alternative
function removeSmallest(numbers) {
    numbers = numbers.slice(0);
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
  }