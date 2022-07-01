//MY SOLUTION 

function openOrSenior(data){
    let player = [];
    let output = [];
    for (let index = 0; index < data.length; index++) {
      for (let j = 0; j < data[index].length; j++) {
        player.push(data[index][j]);
      }
      if(data[index][0] >= 55 && data[index][1] > 7 ){
      output.push('Senior');
      } else {
      output.push('Open');
      }
    }
    return output;
  
  }

//ALTERNATIVE 

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }
  