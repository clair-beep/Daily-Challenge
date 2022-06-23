//MY SOLUTION
const arr = N => {
    let element =[];
  for (let index = 0; index <N; index++) {
       element.push(index);
  }
  return element;
    }
//ALTERNATIVE
const arr = n => Array.from({length: n}, (_, i) => i);