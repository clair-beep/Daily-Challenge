//MY SOLUTION
function gimme (triplet) {
    let full = Array.from(triplet);
  
    let x = triplet.sort((a, b) => a - b)[1];
  
     return full.indexOf(x);
     }

//ALTERNATIVE
const gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
  };