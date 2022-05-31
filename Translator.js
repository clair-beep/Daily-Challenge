//alternative
const toFreud = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')
//my solution 

function toFreud(string) {
    const arr = string.split(" ");
      let result = "";
      
    if (string === '') {
      return "";
    } else {
       for (let i = 0; i < arr.length; i++) {
      
       result += 'sex ';
     }
    let final = result.trim();
      return final;
    }
    }