// PARAMETERS => 
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

// RETURN => 
//  return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). 
// EXAMPLES => 
// Input >> Output Examples

// minValue ({1, 3, 1})  ==> return (13)

// Explanation:

// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications 
// PSEUDO CODE => 
// delete the duplicates from the list 
// sort the list in descending order 
// concatenate 
// make sure to return a num 

//SOLUTION 
function minValue(values){
    return Number(([...new Set(values)]).sort((a,b) => a-b).join(''));
  //your code here
}
// ALTERNATIVE 

function minValue(values){
    const n = values
      .filter((e, i, arr) => arr.indexOf(e) === i)
      .sort()
      .join('');
    return Number(n);
  }