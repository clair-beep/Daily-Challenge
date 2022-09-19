function removeRotten(arr){
    return arr ? arr.map(x=>x.replace('rotten', '').toLowerCase()) : [] ;
  }
  
  console.log(removeRotten(["apple","banana","kiwi","melone","orange"]))

  // alternative

//   function removeRotten(bagOfFruits){
    // if(!bagOfFruits || !bagOfFruits.length) {return [];} 
    // else {return bagOfFruits.map(e => e.replace(/^rotten/g, '').toLowerCase())};