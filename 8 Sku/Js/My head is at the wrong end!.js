//MY SOLUTION
function fixTheMeerkat(arr) {

    return[arr.pop(),arr[1], arr.shift()];
      
   }
//ALTERNATIVE
const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]