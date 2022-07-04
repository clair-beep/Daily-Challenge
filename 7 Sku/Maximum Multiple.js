//my solution
function maxMultiple(divisor, bound){
    let result = 0;
      for (let i = bound; i > 0; i--) {
        if(i % divisor === 0 ) {
        result = i;
        break;
        }
      }
      
    return result;
    
    }
//alternative
function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }