/* 

Title: WeIrD StRiNg CaSe


Description: 

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples: 

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

Parameters:

a string that will only consist of alphabetical characters 


Return: 

a string mixed with lower case and uppercase characters applying the parameters given 
. 
PSEUDO CODE: 

arrange the str as an array 
loop through it 
create a conditional to apply uppercase to odd indexes
create a conditional to apply lowercase to pair indexes 

*/ 

// solution 

function toWeirdCase(string){
    let arr = string.toUpperCase().split(' ')
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('').map((char, index) => index % 2 !==0 ? (char.toLowerCase()) : char).join('')
    }
    return arr.join(' ')
  }

  // alternative (more readable)

  function toWeirdCaseCharacter(chr, index)
{
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
  return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase(string){
  return string.split(" ").map(toWeirdCaseWord).join(" ");
}