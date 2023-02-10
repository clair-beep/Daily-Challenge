//solution
function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
//alternative

const inAscOrder = arr => arr.join('') === arr.sort((a, b) => a - b).join('');
