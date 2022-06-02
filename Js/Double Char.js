//MY SOLUTION
function doubleChar(str) {

    let copy = str.split('', str.length)
    let x = [];
    for (let i = 0; i <str.length; i++) {
        x.push(copy[i]);
        x.push(copy[i]);
    }
    return x.join("");
    }  
    
//ALTERNATIVE
const doubleChar = (str) => str.split("").map(c => c + c).join("");