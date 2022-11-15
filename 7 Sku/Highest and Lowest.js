// solution 

function highAndLow(numbers){
    const highAndLow = numbers.split(' ').sort((a, b) => a - b);
  const high =  highAndLow[highAndLow.length -1]
  const low =  highAndLow[0]
  return high + ' ' + low
  
}
//alternative 

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }