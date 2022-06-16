//my solution 
function squareOrSquareRoot(array) {
    return array.map(element => (Number.isInteger(Math.sqrt(element, 2))) ? (Math.sqrt(element, 2)) : (Math.pow(element, 2)));
 }

//alternative
function squareOrSquareRoot(array) {
    return array.map(x => {
      const r = Math.sqrt(x);
      return (r % 1 == 0) ? r : (x*x);
    });  
  }