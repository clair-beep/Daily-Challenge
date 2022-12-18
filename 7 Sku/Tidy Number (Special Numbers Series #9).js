//solution


function tidyNumber(n){
    n = n.toString().split('')
    for(let i= 1;i<n.length;i++){
      let prevNum =n[i-1]
      if(n[i] < prevNum){
        return false
      }
    }
    return true
  }

  //alternative