//mine
function isDivideBy(number, a, b) {
    if(number % a === 0 &&  number % b === 0) {
      return true; 
    } else {
        return false; 
    }
    }
//alternative
function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0
  }