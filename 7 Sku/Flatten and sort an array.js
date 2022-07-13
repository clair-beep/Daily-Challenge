//MY SOLUTION

function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
  }
//ALTERNATIVE
function flattenAndSort(array) {
    return array
      .reduce((result, current) => [...result, ...current],[])
      .sort((a, b) => a - b)
      ;
  }