//MY SOLUTION
function sort(initialArray, sortingArray) {
  let sortedArr = [];
  for (let index = 0; index < initialArray.length; index++) {
    sortedArr[sortingArray[index]] = sotedArrarray[index];
  }
  return sortedArr
}

//ALTERNATIVE
function sort(initialArray, sortingArray) {
    const result = Array(initialArray.length);
    sortingArray.forEach((x, i) => result[x] = initialArray[i]);
    return result;
  }