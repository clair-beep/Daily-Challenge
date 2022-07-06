//MY SOLUTION 
function sumOfMinimums(x) {
    return x.map(x => Math.min(...x)).reduce((a, b) => a + b);
 }
 console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));
 
//ALTERNATIVE
function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
  }