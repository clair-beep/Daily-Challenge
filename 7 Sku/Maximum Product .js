// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .
// returns => 

// examples => adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:

    // The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// pseudo code =>  create a loop 
// pass aconditional to that loop to find the h)ghest product 


function adjacentElementsProduct(array) {
    let sum = array[0];
    array.forEach((element, i) => {
        if(sum < element * (array[i -1]))
            sum = element * (array[i -1]);
            console.log(element)
            console.log(array[i -1])
        console.log(sum)
    });
    return sum;
  }

  //alternative 

  function adjacentElementsProduct(array) {
    let newArr = []
    for(i=0; i < array.length-1; i++){
      newArr.push(array[i]*array[i+1])
    }  
    return Math.max(...newArr)
  }