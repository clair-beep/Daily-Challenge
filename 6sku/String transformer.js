// description: 
// receive a str 
// only character 
// uupercase => lowercase 
// lowercase => uppercase
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.


//example "Example Input" ==> "iNPUT eXAMPLE"

//return a reverse string swapping uppercase to lowerCase and viceversa 


//solution 

function evaporator(content, evap_per_day, threshold){ 
  // reverse str
    // str => arr
      // reduce => 
      let finalStr = ''
      let arr = str.split('').map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())
    // conditional lower or upper
  
      // str => arr
      let newStr = arr.join('').split(' ').reverse().join(' ')
      return newStr
        // conditional 
    // return char contrary we reiceved 
  
}

//alternative 

function stringTransformer(str) {
    return str
      .split(' ')
      .reverse()
      .join(' ')
      .split('')
      .map(v => v == v.toUpperCase() ?
        v.toLowerCase() :
        v.toUpperCase())
      .join('');
  }