/*
title: CamelCase Method

Description: 

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.


Examples: 

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

Parameters:

a string with lower case characters 

Return: 

a string  applying the parameters given 
. 
PSEUDO CODE: 

the string becomes an arr
loop through it
create a conditional applying uppercase to the desired characters 
*/ 

//solution 

String.prototype.camelCase=function(){
    return this.split(' ').map(char => char.charAt(0).toUpperCase() + char.slice(1)).join('')
}
 /*
alternative 
String.prototype.camelCase=function(){
  return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
}
}
  */

  
