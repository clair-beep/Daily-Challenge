// ALTERNATIVE
function addLength(str){
    return str.split(' ').map(function(v){return v+' '+v.length})
  }
//MY SOLUTION
function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
  }