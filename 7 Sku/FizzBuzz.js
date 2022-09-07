function fizzbuzz(n)
{
    const arr = [];
   for (let x = 1; x <= n; x++) {
     
        if( (x % 3 === 0)  && (x % 5 === 0)) {
            arr.push('FizzBuzz')
        } else if ( x % 3 === 0) {
            arr.push('Fizz')
        } else if ( x % 5 === 0){
            arr.push('Buzz')
        } else {
            arr.push(x)
        }
    }
    return arr;
}

