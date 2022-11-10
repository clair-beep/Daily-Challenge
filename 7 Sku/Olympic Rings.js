function olympicRing(a){
    let ringsOne = ['a', 'b','d', 'e', 'g', 'o', 'p', 'q', 'A', 'D', 'O', 'P', 'Q','R'];
    let ringsTwo = ['B'];
    let count = 0
    for(let i = 0; i < a.length; i++){
      if(ringsOne.includes(a[i])) {
        count++
      } else if(ringsTwo.includes(a[i])){
        count+= 2
      } else {
         count+= 0
      }
    }
    
    
    let result = Math.floor(count / 2)
      return result===2?'Bronze!':result===3?'Silver!':result>=4?'Gold!':'Not even a medal!'
  
  
  }
    
    // create an arr with letter with one ring
    // create an arr with letters with two rings 
    // word all lower case
    // loop trhough it 
    //keep the count for one rings
      //keep the count for one rings
    //