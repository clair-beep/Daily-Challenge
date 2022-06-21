// // my solution
const index = (array, n) => (array.length <= n) ? -1 : Math.pow(array[n], n);
// // ALTERNATIVE
const index = (array, n) => array[n] ** n || -1; 