/*
title:Array combinations



Description: In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

See test cases for more examples.

Good luck!

Parameters: 1 array with 1 or more subarrays
never empty 

Return: 

 return the number of unique arrays that can be formed by picking exactly one element from each subarray.

 
Pseudo Code: 

Solution

*/
function expandedForm(num) {
  num = num.toString().split('');
  let expanded = [];
  let index = -1;

  for (let i = num.length - 1; i >= 0; i--) {
    index++;
    if (num[index] !== '0') {
      let chunk = num[index] + '0'.repeat(i);
      expanded.push(chunk);
    }
  }
  return expanded.join(' + ');
}

// Alternative:

// function expandedForm(num) {
//     let digits = num.toString().split(''); // Convert number to string and split into digits
//     let expanded = []; // Initialize empty array to store expanded form

//     for(let i = 0; i < digits.length; i++) {
//       let power = digits.length - i - 1; // Calculate the power of 10 for the current digit

//       if(digits[i] !== '0') { // Only add non-zero digits to the expanded form
//         let term = digits[i] + '0'.repeat(power); // Construct the term for the current digit
//         expanded.push(term); // Add the term to the expanded form array
//       }
//     }

//     return expanded.join(' + '); // Join the terms with ' + ' separator and return the expanded form string
//   }
