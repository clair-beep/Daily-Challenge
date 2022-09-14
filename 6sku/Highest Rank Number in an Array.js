// // PARAMETERS =>  an array with nmbers, it will neve be empty 

// // RETURN => number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// // EXAMPLES =>  

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


// // // PSEUDO CODE =>  count the number of occurence
// If there is a tie for most frequent number, return the largest number among them.
// /

const arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] ;

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

let high = Object.entries(count).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    

console.log(count); // 👉️ {a: 3, b: 1, c: 2}
console.log(high); // 👉️ 3
