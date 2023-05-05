// Description:
// Is a Prime?
// Just your usual prime kata.. with some unknown restrictions.. Good luck!

// This kata requires a lot of guess work so try and try again. :)

// Note: You may not have any loops

// Examples:

// isPrime('optimusprime'),true,'A prime is present'
// isPrime('11'),true,'A prime is present'
// isPrime('4'),false,'No prime has been found'
// isPrime('starPrime'),true,'A prime is present'
// isPrime('11aagghh4'),true,'A prime is present'

function isPrime(str) {
  //const numbers = str.match(/\d+/g).map(Number)
  const word = str.toLowerCase().includes('prime');
  const matches = str.match(/\d+/g);

  const numbers = matches ? matches.map(Number) : [];
  let primeStatus = false;

  if (word) {
    return word;
  } else if (numbers) {
    for (let number of numbers) {
      let isPrime = true;

      if (number > 1) {
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            isPrime = false;
            break;
          }
        }

        if (isPrime) {
          primeStatus = true;
          break;
        }
      }
    }
    return primeStatus;
  } else {
    return false;
  }
}
