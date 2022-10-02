/*
title: Break camelCase

Description: 

Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

PARAMETERS =>   a string 

RETURN =>   a string with a space before each upper case 

EXAMPLES =>   

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

PSEUDO CODE =>   id when an upper case occurs 
 add a space 
 return string 

*/ 

//solution 

function solution(string) {
    let spaced = '';
      for (let i = 0; i < string.length; i++) {
        if(string.charAt(i).toUpperCase() === (string.charAt(i))) {
          spaced +=  ' ' + string.charAt(i);
        } else {
          spaced += string.charAt(i);
        }
      }
      return spaced
  }
 /*

 function solution(string) {
  string = string.split('').map(el => el === el.toUpperCase() ? el = ' ' + el : el).join('')
}
  */

  
