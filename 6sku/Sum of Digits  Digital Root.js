
// PARAMETERS =>    n === integer number

// RETURN => digital root of a given number 
// EXAMPLES => 
// For example, say we need to calculate the digital root of 56984.

//     Step 1: 5 + 6 + 9 + 8 + 4 = 32

//     Step 2: 3 + 2 = 5

// 5 is the digital root of the number 56984.
// // PSEUDO CODE => 



// 'n/9' gives the quotient that we get when the number is divided by 9. Here we might get an integer as well as a decimal digit.

// Next, we take 'ceil' -ceiling - of 'n/9'. This will get rid of the decimal component.

// Now, when we multiply this number by 9, we will get a number that is the multiple of 9 that is the closest to our given number.

// At last, the difference between the two numbers gives us the digital root.

function digitalRoot(n) {
    let digitalRoot = n - 9 * (Math.ceil(n / 9) - 1)
    return n == 0 ? 0 : digitalRoot;
  
  }
  
  console.log(digitalRoot(0))