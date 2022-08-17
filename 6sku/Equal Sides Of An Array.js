
// PARAMETERS =>   an array of integers

// RETURN => a num that represent the index  where the sum of the integers to the left of N is equal to the sum of the integers to the right of N

// EXAMPLES => [1,2,3,4,3,2,1] ---> return the index 3 because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
// 

// PSEUDO CODE => use a loop to go compare the arr
// inside it, use slice or something similar to compare 1 half to other 
// 


function findEvenIndex(arr) {
    let index = -1; 
    for (let i = 0; i < arr.length  ; i++) {
      let n2 = arr.slice(0, i ).reduce((previousValue, currentValue) => previousValue + currentValue, 0 );  
      let n1 = arr.slice(i + 1, arr.length).reduce((previousValue, currentValue) => previousValue + currentValue, 0 );
      console.log(n1)
      console.log(n2)
  
      if(n1 === n2) {
        index = i;
      }
  
  } 
  return index === 0 ? -1 : index;
  }
  
  console.log(findEvenIndex( [10,-80,10,10,15,35,20]))


  //alternative

  function findEvenIndex(arr)
{
  let left = 0;
  let right = arr.reduce((s,n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}