/* codewars title: Sum of Two Integers 

description: 

Task

Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -
Notes

    The numbers (a,b) may be positive , negative values or zeros .

    Returning value will be an integer .

    Javascript: the Array reduce methods are disabled, along with eval, require, and module .

Input >> Output Examples

1- Add (5,19) ==> return (24) 

2- Add (-27,18) ==> return (-9)

3- Add (-14,-16) ==> return (-30)

pseudo code => 

We will use bitwise operators and will use recursion.

We use this method when we have a few low resources. Read more about when to use this method! https://en.wikipedia.org/wiki/Recursion_(computer_science)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators


*/

//solution 
const getSum = (a,b) => b ? getSum(a ^ b, (a & b) << 1) : a;
//alternative  
const add = (a, b) => {
    const firstArr = new Array(a).fill(true);
    const secondArr = new Array(b).fill(true);
    return firstArr.concat(secondArr).length
  }