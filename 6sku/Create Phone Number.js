// PARAMETERS =>  array of 10 integers 

// RETURN => returns a string of those numbers in the form of a phone number.

// EXAMPLES => ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) => "(123)"

// PSEUDO CODE => 

/* 
add a ( after the first num 
add a ) after the thirc num 

*/

function createPhoneNumber(numbers) {
    let str =  numbers.join('').split('')
    str.splice(6, 0, '-')
    str.splice(3, 0, ')')
    str.unshift('(')
    return str.join('')

}

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));// "(123) 456-7890");
  console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));// "(111) 111-1111");
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));// "(123) 456-7890");

  

//ALTERNATIVE

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }