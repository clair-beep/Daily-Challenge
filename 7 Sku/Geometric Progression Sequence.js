//solution 

function geometricSequenceElements(a, r, n){
    let result = [];
    for(let i = a; result.length < n; i = i * r) {
      result.push(i)
    }
    return result.join(', ')
  }