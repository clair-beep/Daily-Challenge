function reverseLetter(str) {
    let result = ""
    for(let i =0; i < str.length; i++) {
      if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 90 || str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123 ) {
        result = str[i] + result
      }
    }
    return result
  }

  
  // alternative 

  function reverseLetter(str) {
    return str.split('').reverse().filter(function(el) {
      if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) != -1) {
        return el;
      }
    }).join('');
  }