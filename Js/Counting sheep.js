// my solution 
function countSheeps(arrayOfSheep) {
    let num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }

//alternative 

function countSheeps(arrayOfSheep) {
    let counter = 0
    arrayOfSheep.forEach(sheep => {
        if(sheep) counter++
    })
    return counter
}