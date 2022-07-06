//MY SOLUTION 
/ splits 'my-long-word' into array ['a', 'b', 'c', 'd', 'e', 'f']
// capitalizes pair letters o
// capitalizes odd letters o

// concatenate both strings 

function capitalize(s) {
s = s.split('');
let array1 = s.map((word, index) =>  index % 2 !== 0 ? word.toLowerCase() : word.toUpperCase()).join('').split(' ')
let array2 = s.map((word, index) =>  index % 2 == 0 ? word.toLowerCase() : word.toUpperCase()).join('').split(' ')
return array1.concat(array2);

    
}
//ALTERNATIVE

function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };