
// PARAMETERS =>  you wii receive a number to mark the size of your multiplication table 

// RETURN =>multiplication table, of size provided in parameter. each chuck will be an array, resulting in one array per section 

// EXAMPLES =>  

// for example, when given size is 3:
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// // PSEUDO CODE =>  

// make the multiplication table 
// subdivide it into chucks 


function multiplicationTable(size) {
  let multiplicationTable = [];
  for (let i = 1; i <= size; i++) {
    for (let x = 1; x <= size; x++) {
      multiplicationTable.push(x * i)
    }
  }
  const res = [];
  for (let a = 0; a < multiplicationTable.length; a += size) {
    const chunk = multiplicationTable.slice(a, a + size);
    res.push(chunk);
}
  return res;
}

console.log(multiplicationTable(3))  //  [[1,2,3], [2,4,6], [3,6,9]]);

