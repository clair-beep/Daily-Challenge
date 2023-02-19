/*
title: Unique In Order


Description: 

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


Examples: 

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

Parameters:

a string with mixed cases 'AAAABBBCCDAABBB'

Return: 

an array without any element with the same value, preserving the order 
. 
PSEUDO CODE: 


*/

//solution

var uniqueInOrder = function (iterable) {
  if (typeof iterable === 'object') {
    return iterable.filter((word, index, arr) => {
      return arr[index + 1] !== word;
    });
  } else {
    return iterable.split('').filter((word, index, arr) => {
      return arr[index + 1] !== word;
    });
  }
};
/*

Better alternative: 

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

  */
