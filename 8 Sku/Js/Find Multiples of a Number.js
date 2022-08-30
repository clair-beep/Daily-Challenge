function findMultiples(integer, limit) {
    let arr = [];
    for (let index = integer; index <= limit; index+= integer) {
        arr.push(index)
        
    }
    return arr;
}

console.log(findMultiples(5, 25)),//[5, 10, 15, 20, 25])
console.log(findMultiples(1, 2))// [1, 2])
console.log(findMultiples(5, 7))// [5])
console.log(findMultiples(4, 27))// [4, 8, 12, 16, 20, 24])