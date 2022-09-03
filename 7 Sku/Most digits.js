// array: array being passed to the function
// array.reduce(a,b): for each element in the array array perform the following function on each element and use the accumulator a to hold the result
// `${b}` : codegolf equivalent of a.toString()

// */  

function findLongest(array){
return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a))
}
console.log(findLongest([1, 10, 100]))// 100)
console.log(findLongest([9000, 8, 800]))// 9000)
console.log(findLongest([8, 900, 500]))// 900)