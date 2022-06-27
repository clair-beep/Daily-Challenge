// ALTERNATIVE
function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }
//MY SOLUTION
const digitize = n => String(n).split("").map((num)=>Number(num)).reverse();