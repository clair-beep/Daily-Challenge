// PARAMETERS =>    an integer always, could do positive or negative 

// RETURN => true of false 
// EXAMPLES => 
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
// PSEUDO CODE => 

// find the square root of a number compare if it equal whe rouding up the result 

const isSquare = n =>  Math.sqrt(n) === Math.floor(Math.sqrt(n)) ?  true : false;

//alternative 

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }