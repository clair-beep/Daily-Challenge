//solution 
function howManyGifts(maxBudget, gifts){
    let number = 0;
    if(maxBudget < 1) {
        return 0
    } else {
        gifts.sort((a, b) =>  a - b)
    
    }
    for (let i = 0; i <= gifts.length; i++) {
        console.log(maxBudget)
        if(maxBudget < 0) {
            return i -1
        }
        maxBudget -= gifts[i];
        
        
    }
    return gifts.length;
}

//alternative
function howManyGifts(maxBudget, gifts){
    gifts.sort((a,b) => a-b)
    return gifts.filter(item => (maxBudget -= item) >= 0).length
  }