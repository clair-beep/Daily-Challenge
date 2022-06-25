//alternative
function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length) return [];
    return input.reduce((arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    }, [0, 0]);
  }
//SOLUTION
function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){
      return [];
    } else {
          let positive = input.filter(num =>num > 0);
        let negative =  input.filter(num =>num < 0).reduce(
      (previousValue, currentValue) => previousValue + currentValue,0)
    
        if  (positive == 0 && negative == 0) {
          return []; 
        } else {
          return [positive.length, negative];
        }
    }
    
        
    }