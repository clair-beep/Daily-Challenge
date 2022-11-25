//solution 
function mostFrequentItemCount(collection) {
    let charMap = {}
    let maxValue = 0;
    for(let char of collection) {
      if(charMap.hasOwnProperty(char)) {
        charMap[char]++
      } else {
        charMap[char]=1
      }
    }
     for(let times in charMap) {
       if(maxValue < charMap[times]) {
         maxValue = charMap[times]
       }
     }
     return maxValue
   }

   // alternative 
   function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;
    
    var count = Object.create(null);
    
    collection.forEach( item => {
      count[item] = (count[item] || 0) + 1;
    });
    
    return Math.max(...Object.values(count));
  }
