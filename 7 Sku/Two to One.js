// My solution 
function longest(s1, s2) {
    let temp = s1.concat(s2);
    let result =[];
    temp.split('').sort().forEach((c) => {
      if (!result.includes(c)) {
        result.push(c);
      }
  });
  
  return result.join('');
  
  
  }
//alternative
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }