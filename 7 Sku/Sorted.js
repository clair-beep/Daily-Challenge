// My solution 
function isSortedAndHow(array) {
    if(array.slice().sort(function(a,b){return a-b}).join(" ") == array.join(" ")) {
      return "yes, ascending" 
      }
    if(array.slice().sort(function(a,b){return b-a}).join(" ") == array.join(" ")) {
    return "yes, descending" 
      }
   return "no"
  }
//alternative
const isSortedAndHow = array => {
    let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
    let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
    
    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
  }