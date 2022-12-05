//solution 

function wordsToMarks(string){
    let result = 0;
    for(let i = 0; i < string.length; i++){
      result += string.charCodeAt(i) - 96
    }
    return result
  }

  //alternative

  const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
