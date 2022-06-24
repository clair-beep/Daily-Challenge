///my solution 

function mergeArrays(arr1, arr2) {
    const mergedArr = arr1.concat(arr2);
    const finalArr = [];
    mergedArr.forEach((x) => {
      if(!finalArr.includes(x)) {
        finalArr.push(x);
      }
    });
    return finalArr.sort((a, b) => a - b);
  }
//alternative 
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
  }