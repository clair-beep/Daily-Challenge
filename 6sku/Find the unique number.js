
// PARAMETERS =>    array contains at least 3 numbers.

// RETURN => the number that is not equal to others 

// EXAMPLES => findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// 


function findUniq(arr) {
    let repeated = arr.filter((item, index) => arr.indexOf(item) !== index)
    return arr.filter((item)=> item !== repeated[0])[0]
  }
  
  
  console.log(findUniq[ 0, 0, 1 ])