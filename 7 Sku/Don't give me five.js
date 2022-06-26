// ALTERNATIVE
function dontGiveMeFive(start, end){
    let res = [];
    for (let i = start; i <= end; i++) {
      if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
  }

//MY SOLUTION
const dontGiveMeFive = (min, max) =>
  [...Array(max - min + 1).keys()]
  .map(n => n + min)
  .filter(n => !`${n}`.includes('5'))
.length;