//my solution
function reverseWords(str) {
    str = str.split('').reverse().join('').split(' ');
  
    let newStr = [];
    for (let index =str.length -1; index >= 0; index--) {
      newStr.push(str[index]);
    }
    return newStr.join(' ');
  }
//alternative
function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
  }