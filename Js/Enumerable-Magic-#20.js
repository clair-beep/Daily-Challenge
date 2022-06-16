// MY SOLUTION 
function eachCons(array, n) {
    const r = []; for(let i = 0; i <= array.length -n; i++ ){
    const chunk = []; for(let j = i; j < i + n; j++){ 
      chunk.push(array[j]) }
      r.push(chunk) }
    return r; 
  }

//ALTERNATIVE

function eachCons(array, n) {
    let cascadingSubset = [];
    for( i = 0; i <= array.length - n; i++){
      cascadingSubset.push(array.slice(i, i + n ));
    }
    return cascadingSubset;
  }