//ALTERNATIVE
function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }
//SOLUTION

const roundToNext5 = n =>  n % 5 === 0 ? n:  Math.ceil(n / 5)*5;