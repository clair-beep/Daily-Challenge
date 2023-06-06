function divisors(integer) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(integer); i++) {
    if (integer % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    return `${integer} is prime`;
  } else {
    let divisors = [];
    for (let i = 2; i < integer; i++) {
      if (integer % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }

  // if no prime return all possible divisors inside an array
}

//Alternative

function divisors(integer) {
  var divs = [];

  for (var i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divs.push(i);
    }
  }

  return divs.length ? divs : integer + ' is prime';
}
