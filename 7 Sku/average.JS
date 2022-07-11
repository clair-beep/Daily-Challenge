    //MY SOLUTION 
// array of numbers 
// Input is guaranteed to hold at least 1 citizen
// will heed to return the exact value, allow decimals 

// do not return anythinng mutate the original value (wealth)

// [0, 10] => [5, 5]

// sum all values inside the arr 
// get the average of all values 
// modify the array based on the previous info 


function redistributeWealth(wealth) {
    const average = wealth.reduce((prev, current) => prev + current,0) / wealth.length;
    for(let i = 0; i < wealth.length; i++) {
    wealth[i] = average;
    }  
    
  void wealth;
    
  }
    //alternative

    function redistributeWealth(wealth) {
        let sum = 0;
        
        wealth.forEach(num => {
          sum += num
        })
        
        wealth.forEach((num,index) => {
          wealth[index] = sum / wealth.length
        })
        
        return undefined
      }