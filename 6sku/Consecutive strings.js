// PARAMETERS =>   an array(list) strarr of strings and an integer k

// RETURN => Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// // EXAMPLES =>  strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// // // PSEUDO CODE => The function longestConsec takes the string array strarr and the integer k as input, and returns the first longest string consisting of k consecutive strings.

// The function first checks if the input is valid, and returns an empty string if n is 0, k is greater than n, or k is less than or equal to 0.

// Otherwise, the function initializes an empty string longest, and loops through the array from 0 to n - k. At each iteration, it slices the strarr array to get k consecutive strings starting at index i, joins them together into a single string current, and checks if current is longer than longest. If it is, longest is updated to current.

// Finally, the function returns longest.
function longestConsec(strarr, k) {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return '';
  }
  let longest = '';
  for (let i = 0; i <= n - k; i++) {
    const current = strarr.slice(i, i + k).join('');
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}
