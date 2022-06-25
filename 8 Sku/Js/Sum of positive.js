// ALTERNATIVE
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }
//MY SOLUTION
const  positiveSum = (arr) => {
    return arr.filter(num => num > 0).reduce(
    (previousValue, currentValue) => previousValue + currentValue,0);
    
  }