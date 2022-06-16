//my solution 

function arrayPlusArray(arr1, arr2) {
    const arr3 = arr1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  0);
      const arr4 = arr2.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  0);
    return arr3 + arr4; //something went wrong
  }

//alternative
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);