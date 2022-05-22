//my code 
function strCount(str, letter){  
    const ar = str.split("");
     let num = 0;
   ar.forEach(x => {
     if(x === letter) num++
   })
     return num;
   }
//alternative 
function strCount(str, letter){  
    return str.split(letter).length-1
  }