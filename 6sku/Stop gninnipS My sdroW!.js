// solution 
// PARAMETERS =>    a string, will awals contain one 

// RETURN => a tsing where words with more than  letters will be reversed 
// EXAMPLES => 
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"
// // PSEUDO CODE => 

// need to ID the words > 5 letters 
// the result woll be reversed 

function spinWords(string){
  let arr = string.split(' ');
  let spinned = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length > 4) {
      spinned.push(arr[i].split("").reverse().join(""))
    }
    else {
      spinned.push(arr[i])
    }
  }
  return spinned.join(' ')
}

//alternative 

function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
  }