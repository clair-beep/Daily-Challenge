//solution

function stringarray(str){
    let strToNum = str.map(x => parseFloat(x, 10));
    return strToNum
  }
  
  console.log(stringarray(["1.1","2.2","3.3"]))

  //alternative

//   const toNumberArray = stringarray => stringarray.map(Number);