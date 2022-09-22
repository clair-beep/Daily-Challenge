/*
// PARAMETERS =>  an array with num negatives or positives 

// RETURN => return an array that has 1 added to the value represented by the array.


// EXAMPLES =>  For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]


// // PSEUDO CODE =>  find if there's a negative num, if correct return null if not continue 
glue all num together 
add 1 
return an array with the original seqence +1
 
*/
function upArray(arr) {


  if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
      return null;
  }

  for (var i = 0; i < arr.length; i++) {
      if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
          return null;
      }
  }
  // if its 9 and more than one digit we have to check all previous digits
  // whether they are also a 9
  for (let j = arr.length - 1; j > -1; j--) {

      if (arr[j] !== 9) {
          arr[j] = arr[j] + 1;
          break;
      } else {
          arr[j] = 0;
      }

      if (j === 0) {
          arr.unshift(1);
      }
  }


  return arr;
}