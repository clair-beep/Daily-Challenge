/*
PARAMETERS =>    an array with multiples strings
RETURN =>   Each two non empty parts will be in a pair 
properties or conditions : Each part will be in a string
Elements of a pair must be in the same order as in the original array.
EXAMPLES =>   
 a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
PSEUDO CODE =>   
create a loop to go through the whole arr
group arr according to the conditions provided

*/

function partlist(arr) {
 
    let pairs = [];
    for (let i = 0; i < arr.length -1; i++) {
      let firstChunk = (arr.slice(0, i + 1).join(' '));
      let secondChunk = (arr.slice(i + 1).join(' '))
      pairs.push([firstChunk, secondChunk])
  
    }
    return pairs
  }
  
  
  console.log(partlist(["I", "wish", "I"]))
  result [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
  console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"])) 
  //result[["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
  console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]))
  //result[["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
  
 /*
alternative solution 

function partlist(arr) {
    var newArray;
    var returnArray=[];
    for( var i=1; i<arr.length; i++){
      newArray = [];
      newArray.push(arr.slice(0,i).join(" "));
      newArray.push(arr.slice(i).join(" "));
      returnArray.push(newArray);
    }
    
    return returnArray;
}
*/