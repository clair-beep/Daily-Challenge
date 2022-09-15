// // PARAMETERS =>  an array with nmbers, it will neve be empty 

// // RETURN => number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// // EXAMPLES =>  

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


// // // PSEUDO CODE =>  count the number of occurence
// If there is a tie for most frequent number, return the largest number among them.
// /


const arr = ['a', 'b', 'a', 'a', 'c', 'c'];

const count = {};

for (const iterator of arr) {
    if(count[iterator]){
        count[iterator] += 1;
    } else {
        count[element] = 1
    }
}

console.log(count); // 👉️ {a: 3, b: 1, c: 2}