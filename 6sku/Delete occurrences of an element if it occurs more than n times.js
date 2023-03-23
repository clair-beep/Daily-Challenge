//Solution
function deleteNth(arr, n) {
  let map = {};
  let list = [];
  for (let reps of arr) {
    map[reps] = map[reps] + 1 || 1;
    if (map[reps] <= n) {
      list.push(reps);
    }
  }
  return list;
}
//Alternative

function deleteNth(arr, x) {
  // Define a function that takes an array and a number as arguments
  var obj = {}; // Create an empty object
  return arr.filter(function (number) {
    // Use the filter() method to iterate over each element in the array
    obj[number] = obj[number] ? obj[number] + 1 : 1; // If the current element already exists in the object, increment its count by 1. Otherwise, set its count to 1.
    return obj[number] <= x; // Return true if the count for the current element is less than or equal to x, false otherwise.
  });
}

//   This code defines a function called deleteNth that takes an array arr and a number x as arguments. The purpose of the function is to remove any element from arr that appears more than x times, and return a new array with the remaining elements.

// To achieve this, the function creates an empty object called obj. It then uses the filter() method to iterate over each element in the arr array and filter out any element that appears more than x times.

// Within the filter() callback function, the code checks if the current element (represented by the number parameter) already exists in the obj object. If it does, the code increments the count for that element in the obj object by 1. If it doesn't, the code sets the count for that element to 1.

// The filter() method then returns only those elements for which the count in the obj object is less than or equal to x.
