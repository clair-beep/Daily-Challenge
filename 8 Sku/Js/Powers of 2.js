function powersOfTwo(n){
    const element = [];
    for (let index = 0; index <= n; index++) {
        element.push(Math.pow(2, index))
    }
    return element;
  }