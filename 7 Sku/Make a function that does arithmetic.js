function arithmetic(a, b, operator){
    let result;
  switch(operator) {
      case 'add':
          result = a + b;
          break;
      case 'subtract':
          result = a - b;
          break;
      case 'multiply':
          result = a * b;
          break;
      case 'divide':
          result = a / b;
          break;
  
      default:
          console.log('Invalid operator');
          break;
  }
    return result
    }

    //alternative

    function arithmetic(a, b, operator){
        switch(operator) {
          case 'add':
            return a + b;
          case 'subtract':
            return a - b;
          case 'multiply':
            return a * b;
          case 'divide':
            return a / b;
        }
      }