//mine
function sumMix(x){
    let arrayOfNumbers = x.map(Number);
  return arrayOfNumbers.reduce((a, b) => a + b);
  }
//alternative

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }
