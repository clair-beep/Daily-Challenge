// my solution 

const reverseSeq = n => {
    let sum = [];
  for(let i = 1; i <= n; i++) {
      sum.push(i)
    
   }
    return sum.reverse();
  }; 

  // alterntive 

  const reverseSeq = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
    };