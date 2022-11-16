//solution
function accum(s) {
    let result = ""
    for(let i = 0; i< s.length; i++) {
      let chunck = s[i].toUpperCase() +     s[i].toLowerCase().repeat(i)
      if( i === s.length -1) {
         result += chunck
      } else {
        result += chunck + '-'
  
      }
    }
    return result
    
  }
//alternative 

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }