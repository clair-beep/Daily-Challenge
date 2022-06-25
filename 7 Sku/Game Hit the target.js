// ALTERNATIVE
const solution = mtrx =>{ 
    const arr = mtrx.filter(el => el.includes('>') && el.includes('x') )[0] || []
    return arr.indexOf('>') < arr.indexOf('x') 
  }
//MY SOLUTION
