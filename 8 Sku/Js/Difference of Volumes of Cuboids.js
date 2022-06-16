//MY SOLUTION 
function findDifference(a, b) {
    const firsrtCube = a.reduce(
     (previousValue, currentValue) => previousValue * currentValue,
     1
     );    
      const secondCube = b.reduce(
     (previousValue, currentValue) => previousValue * currentValue,
     1
     );  
     
     return Math.abs(firsrtCube - secondCube);
   }
//ALTERNATIVE
function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }