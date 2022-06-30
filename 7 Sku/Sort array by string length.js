//MY SOLUTION
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };
//ALTERNATIVE
let sortByLength = arr => arr.sort((a,b) => a.length - b.length);