
// PARAMETERS =>  2  in total

// arr: an array with numbers  
//to return: defines wheter we rhould return the value or the idex containing the value


// RETURN => return the smallest value of an array or the index of that value

// EXAMPLES =>min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0


// PSEUDO CODE => conditional idx/value
//search for m)n value 
// find the idx 

function min(arr, toReturn) {
    if(toReturn === 'value') {
        return (Math.min(...arr))
    } else {
  
        return  arr.findIndex((num) => num === Math.min(...arr));
    }
  }
  
    console.log(min([1,2,3,4,5], 'value'))// 1)
    console.log(min([1,2,3,4,5], 'index'))// 0)
  
  
//    alternatives

const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));