// ALTERNATIVE
function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }
//MY SOLUTION
function twoSort(s) {
    let sort = s.sort();
    return sort[0]
    .split('')
    .join("***");
    }