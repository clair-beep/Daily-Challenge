//my solution 
const rowWeights = array => {
    let pair = 0;
    let odd = 0;
    array.forEach((element, index) => {
      index % 2 === 0 ? pair += element : odd += element
    });
    return [odd, pair];
  }
//alternative
function rowWeights(array){
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
  }