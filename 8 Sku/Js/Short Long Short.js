// Solution

function solution(a, b) {
  let result;
  if (a.length > b.length) {
    result = b + a + b;
  } else {
    result = a + b + a;
  }
  return result;
}
