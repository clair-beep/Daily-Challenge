//solutiohn
function findShort(s){
    let arr = s.split(' ')
    let result = arr[0].length
    for(let i = 0; i< arr.length; i++) {
     if(arr[i].length < result ) {
       result = arr[i].length
     }
    }
    return result
  }
//alternative
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }