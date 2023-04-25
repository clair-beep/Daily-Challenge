/* 

Description
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

Examples:
 For example, take 153 (3 digits), which is narcissistic:
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

Return:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

*/

//Solution

function narcissistic(value) {
  let narcissisticNumber = 0;
  let arr = Array.from(String(value), Number);
  for (let i = 0; i < arr.length; i++) {
    let currentPower = Math.pow(arr[i], arr.length);
    narcissisticNumber += currentPower;
  }

  const veridict = narcissisticNumber === value;
  return veridict;
}

//Alternative

function narcissistic(value) {
  return (
    ('' + value).split('').reduce(function (p, c) {
      return p + Math.pow(c, ('' + value).length);
    }, 0) == value
  );
}
