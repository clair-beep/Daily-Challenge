//solution 

function encode(string) {
    let str = string.split('')
    for (let i = 0; i < str.length; i++) {
      if (str[i] == 'a') {
        str.splice(i, 1, '1')
      } else if (str[i] == 'e'){
        str.splice(i, 1, '2')
      } else if (str[i] == 'i'){
        str.splice(i, 1, '3')
      } else if (str[i] == 'o') {
        str.splice(i, 1, '4')
      } else if (str[i] == 'u') {
        str.splice(i, 1, '5')
      }
      
    }
    return str.join('')
  }

//alternative 

function encode(string){
    var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
    return codeStringGivenMapping(string, vowelMapping);
  }
  
  function decode(string){
    var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
    return codeStringGivenMapping(string, vowelMapping); 
  }
  
  function codeStringGivenMapping(string, mapping){
    return string.split('').map(function(char){
      return mapping[char] || char;
    }).join(''); 
  }