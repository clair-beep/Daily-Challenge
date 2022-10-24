/*
title:Array combinations



Description: In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

See test cases for more examples.

Good luck!

Parameters: 1 array with 1 or more subarrays
never empty 

Return: 

 return the number of unique arrays that can be formed by picking exactly one element from each subarray.

 
Pseudo Code: 



*/ 

//solution 
const solve = arr => arr.reduce((a, c) => a * new Set(c).size, 1)

/*
alternative 

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
*/

