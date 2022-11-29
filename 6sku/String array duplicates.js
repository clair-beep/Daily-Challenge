function dup(s) {
    // map -> 
      return s.map(word => word.split('').filter((x,i, a) => x !==  a[i -1]).join(''))
    };