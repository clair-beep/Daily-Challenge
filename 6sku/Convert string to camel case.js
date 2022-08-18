//solution 


// PARAMETERS =>   a string with a dash or undescore 

// RETURN => return a string that returns ths original one bug converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 

// EXAMPLES => 
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// PSEUDO CODE => 

// id if the string has a dash or underscore 
//uppercase only the first letter rsrsrs


function toCamelCase(str){
    if (str.includes("_")) {
     chunks = str.split('_')
     return chunks
     .map(
       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
     .join('')
    } else {
     chunks = str.split('-')
     return chunks
     .map(
       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
     .join('')
    }
 
 }