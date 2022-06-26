// ALTERNATIVE

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }
//MY SOLUTION
function minMax(arr){
    let newArr = [];
    newArr.push(Math.min(...arr));
    newArr.push(Math.max(...arr));
    return newArr;
    }