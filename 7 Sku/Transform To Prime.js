// PARAMETERS => List size is at least 2 .

// List's numbers will only positives (n > 0) .

// Repetition of numbers in the list could occur .

// The newer list's sum should equal the closest prime number . 

// RETURN => Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// EXAMPLES => Input >> Output Examples

// 1- minimumNumber ({3,1,2}) ==> return (1)

// Explanation:

//     Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .

// PSEUDO CODE => 

/* 

Writing a function to check for a prime number
create a loop that add one number until arriving 
*/

//SOLUTION

function minimumNumber(numbers) {
    numbers = numbers.reduce((a, b) => a + b )
    let missing = 0;
    const isPrime = numbers => {
      for (let i = 2, s = Math.sqrt(numbers); i <= s; i++)
        if (numbers % i === 0) return false;
      return numbers > 1;
    }
  
    while (!isPrime(numbers)) {
      missing++;
      numbers++;
    }
    return missing;
  }

//ALTERNATIVE 
