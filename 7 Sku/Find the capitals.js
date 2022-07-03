//MY SOLUT)ON 
var capitals = function (word) {
    let num = [];
  
      word.split('') // splits 'CodEWaRs' into array ['C', 'o', 'd', 'E', 'W', 'a', 'R', 's']
      .map(
        // ID all caps
        // return index
        (word, index) => word == word.toUpperCase() ? num.push(index) : word);
    return num;
  };

//ALTERNATIVE

var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };