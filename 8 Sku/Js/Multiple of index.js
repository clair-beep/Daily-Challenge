// ALTERNATIVE
function multipleOfIndex(arr) {
    let arr1 = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] % i == 0) {
        arr1.push(arr[i]);
      }
    }
    return arr1;
  }
  
//MY SOLUTION
const multipleOfIndex = array => array.filter((x, index) => x % index === 0);