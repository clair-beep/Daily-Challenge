function powersOfTwo(n){
    const element = [];

    for (let index = 0; index <= n; index++) {
      console.log(index);
      console.log(n);
        element.push(Math.pow(2, index))
    }
    return element;
  }

  console.log(powersOfTwo(1));