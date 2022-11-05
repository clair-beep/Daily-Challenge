//solution 

function solution(str){
    let result = ""
    for(let char of str) {
      result = char + result
    }
      return result
  }

// alternative

function solution(str){
    return str.split('').reverse().join('');  
  }