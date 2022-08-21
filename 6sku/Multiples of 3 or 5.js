//solution 


// PARAMETERS =>    the limit where we should arrive to find the multiples 

// RETURN => the sum of the multiples 3,5 by the given number  

// EXAMPLES => findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// 

// PSEUDO CODE =>  do it similar to fizz buzz 


function solution(number){
    let sum = 0;
    if(number < 0) {
      return 0;
    } else {
      for (let i = 1; i <number; i++) {
        if(i % 3 === 0 || i % 5 === 0 )
        sum += i
      }
    }
    return sum;
  }
  
  //alternative 

  



function solution(number){
    let sum = 0;

      for (let i = 0; i <number; i++) {
        if(i % 3 === 0 || i % 5 === 0 )
        sum += i
      }
    
    return sum;
  }
  