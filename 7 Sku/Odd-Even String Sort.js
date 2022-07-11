    //MY SOLUTION 


// array of numbers 
// Input is guaranteed to hold at least 1 citizen
// will heed to return the exact value, allow decimals 

// do not return anythinng mutate the original value (wealth)

// [0, 10] => [5, 5]

// sum all values inside the arr 
// get the average of all values 
// modify the array based on the previous info 


function sortMyString(S) {
    S = S.split('')
   let odd = [];
   let pair =[];
   for (let index = 0; index < S.length; index++) {
       if(index % 2 === 0) {
           pair.push(S[index]);
       } else {
           odd.push(S[index]);
       }
       
   }
     
   pair = pair.join('');
   odd = odd.join('');
     
       return pair.concat(` ${odd}`);

    //alternative

const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}