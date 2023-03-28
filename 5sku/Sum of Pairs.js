// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// Approach
// A better approach is to use a hash table to store the index of each number in the array as we loop through it. For each number, we calculate its complement (i.e. the value that would add up to the target value if added to the current number) and check if it's already in the hash table. If it is, then we've found the pair of numbers that add up to the target value. If it's not, then we add the current number and its index to the hash table and continue looping.

// Complexity
// Time complexity:

// Time complexity of this function is O(n), where n is the length of the input array nums
// This is because we are looping through the array once and doing constant-time operations for each element.

// Space complexity:

// Space complexity of this function is O(n), where n is the length of the input array nums
// This is because we are using a hash map to store the index of each element, and the worst-case scenario is when all the elements are unique, so the hash map would have to store all n elements

// // NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
//solution
function sumPairs(ints, s) {
  let seen = new Set();
  let result = [];

  for (let i = 0; i < ints.length; i++) {
    let complement = s - ints[i];
    if (seen.has(complement)) {
      result.push(complement, ints[i]);
      break;
    }
    seen.add(ints[i]);
  }

  if (result.length === 0) {
    return undefined;
  }
  return result;
}
//Alternative

// var sum_pairs=function(ints, s){
//     var seen = {}
//     for (var i = 0; i < ints.length; ++i) {
//       if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
//       seen[ints[i]] = true
//     }
//   }
