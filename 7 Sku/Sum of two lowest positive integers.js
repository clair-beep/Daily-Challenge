//MY SOLUTION
function sumTwoSmallestNumbers(numbers) {  
    let min = Infinity, secondMin = Infinity; 
    for (let i= 0; i< numbers.length; i++) {
        if (numbers[i]< min) {
            secondMin = min;
            min = numbers[i]; 
        } else if (numbers[i]< secondMin) {
            secondMin = numbers[i]; 
        }
    }
  
    return secondMin +  min;
  
    }
//ALTERNATIVE
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };