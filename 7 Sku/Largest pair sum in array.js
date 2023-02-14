//Solution

function largestPairSum(numbers) {
  const max = Math.max(...numbers);
  let secondMax = Math.min(...numbers);
  const index = numbers.indexOf(max);
  if (index !== -1) {
    numbers.splice(index, 1);
  }
  for (let num of numbers) {
    if (num > secondMax) {
      secondMax = num;
    }
  }

  return max + secondMax;
}

//Alternative
function largestPairSum(numbers) {
  let largest = numbers[0];
  let secondLargest = numbers[1];

  if (secondLargest > largest) {
    [largest, secondLargest] = [secondLargest, largest];
  }

  for (let i = 2; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber > largest) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest) {
      secondLargest = currentNumber;
    }
  }

  return largest + secondLargest;
}

// second alternative

function largestPairSum(numbers) {
  var [a, b] = numbers.sort((a, b) => b - a);
  return a + b;
}
