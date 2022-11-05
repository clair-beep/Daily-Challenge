//solution 
function isVow(a){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for(let i = 0; i < a.length; i++) {
      let letter = String.fromCharCode(a[i])
      
      if(vowels.includes(letter)) {
        a.splice(i, 1, letter)
      }
    }
    return a
  } 
//alternative

function isVow(a){
    for (var i=0, l=a.length; i<l; ++i)
    {
      var char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
  }