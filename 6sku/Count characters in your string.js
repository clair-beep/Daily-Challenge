/*
title: Count characters in your string

Description: 

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

Example: 

"aba" => { a: 2, b: 1 } 

Parameters:

a string 

Return: 

an object with the number of ocurrences
 
PSEUDO CODE =>  

the string should be an arr
create a conditional that counts  every itterance 
 return object  

*/ 

//solution 
function count (string) { 
    let count = {};
    string = string.split('')
    for (const iterator of string) {
      if(count[iterator]) {
        count[iterator] += 1;
      } else {
        count[iterator] = 1;
      }
    }
     return count;
  }


//  alternative

// function count (string) {  
//     let count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }