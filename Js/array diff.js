///my solution 
const arrayDiff = (a, b) => a.filter(item => !b.includes(item))//alternative 

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }