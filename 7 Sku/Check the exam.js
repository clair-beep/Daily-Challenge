//my solution
  // create a variable that will store the result 
 // compare both arr with a loop
//create conditional 
//return the result as a num 
  
function checkExam(array1, array2) {
    let result = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        result += 4;
      } else if (array2[i] === ''){
        result += 0;
      } else {
        result -= 1;
      }
    }
    return result < 0 ? 0 : result;
    
    }
//alternative
function checkExam(array1, array2) {
    let score = 0;
    
    for (let i = 0; i <= array1.length; i++) {
      if (!array2[i]) continue;
      
      if (array2[i] == array1[i]) score += 4;
      else score--;
    }
    
    return (score >= 0) ? score : 0;
  }