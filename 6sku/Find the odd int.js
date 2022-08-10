/ PARAMETERS => an array of integers
// RETURN =>return the num that appears ani  odd number of times. 

// EXAMPLES => [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5)

// PSEUDO CODE => get the num of repetions for each num 
// DETERMINE IF ITS ODD, RETURN 

function findOdd(arr) {

    const count = {};
    
    for (const element of arr) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    
    for (const key in count) {
  
      if ((count[key] % 2) == 1){
        
        return +key;
      }
      
      if ((count[key] % 2) == 0){
      }
  
    }
  
  }

  //ALTERNATIVE 

  function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }