///my solution 
let isDivisible = (n, x, y) => (n % x === 0 && n % y === 0) ? true : false;
//alternative 

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
  }