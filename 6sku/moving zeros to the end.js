function moveZeros(arr) {
    let nonZero = arr.filter((data)=> data !== 0);
    let zero = arr.filter((data)=> data === 0);
    return nonZero.concat(zero);
  }

  //// PARAMETERS =>  strings, nums, boolean. all contained in an array 

// RETURN => need to extract the zeros and add them at the end of the arr

// EXAMPLES =>  ([1,2,0,1,0,1,0,3,0,1]))  return [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]))




// // PSEUDO CODE =>  save the otal zeros you get 
// addTHEM at the end 

