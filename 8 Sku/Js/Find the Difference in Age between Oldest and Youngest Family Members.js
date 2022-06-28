//my solution 

function differenceInAges(ages){
    let min =  Math.min(...ages);
    let max =  Math.max(...ages);
    let total = [max - min];
     total.unshift(min, max)
      return total;
    }
//alternative
function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}