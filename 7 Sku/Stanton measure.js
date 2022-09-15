//solution


function stantonMeasure(array) {
    let n = array.filter(x => x === 1).length
    return array.filter(x => x === n).length;
  }
  
  console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); //3

//alternative

function stantonMeasure(arr) {
    const count = n => arr.filter(x => x === n).length;
    return count(count(1));
  }