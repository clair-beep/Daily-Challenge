// MY SOLUTION

// parameters => array of strings 

// return =>  each line prepended by the correct number

// examples => [] --> []
//             ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// pseucocode => use mab to add the inx belonging to each element +1 
//               return 


var number=function(array){
    return array.map((x, indx) => `${indx +1}: ${x}`);
    
    }
//ALTERNATIVE 
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)