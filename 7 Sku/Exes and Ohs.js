//MY SOLUTION
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }
//ALTERNATIVE

function XO(str) {
    let x = 0;
    let o = 0;
    const char = str.toUpperCase().split('');
    
    char.forEach(element => {
        if(element === 'X'){
            x+= 1;
        } else if(element === 'O') {
            o++;
        }
    });
    if(x === 0 && o === 0) {
        return true;
    } else if (x === o) {
        return true;
    } else{
        return false;
    }
    }