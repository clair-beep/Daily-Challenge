function pairs(ar){
    let sum = 0;
    for (let i = 0; i < ar.length; i+=2) {
      let pairs = ar.slice(i, i + 2)
      if(pairs[0] === pairs[1] + 1 || pairs[1] === pairs[0] + 1) {
        sum ++;
      }
      
    }
    return sum;
  };
  
  console.log(pairs([1,2,5,8,-4,-3,7,6,5]))//,3);
  console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]))//,2);

//alternative

// const pairs = ar =>
//   ar.reduce((pre, val, idx) => pre + (++idx % 2 && Math.abs(val - ar[idx]) === 1), 0);