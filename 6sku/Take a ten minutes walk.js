/*
// PARAMETERS =>   you'll reiceive an array of strings, this string can contain 4 difirent letters, each will represent north, weast, east or south  

 ['n', 's', 'w', 'e']

// RETURN => you will need to return true or false. you will return true if the app accomplish the following:

you takes ten minutes
you get back to your strting point 

// EXAMPLES => 
(['n','s','n','s','n','s','n','s','n','s']), 'should return true'); 
['w']), 'should return false');

// // PSEUDO CODE =>  make a conditional for an array that's = 10
evaluate how many times n and s are counted as well as w and e, this should determine if you get back to your starting  point 


function arrange(strng) {
    // your code
}
*/  


function isValidWalk(walk) {
    let ns = 0, ew = 0; 
    if(walk.length === 10){
        for (let i of walk) { 
          if (i == 's') ns -= 1; 
          if (i == 'e') ew += 1; 
          if (i == 'n') ns += 1; 
          if (i == 'w') ew -= 1; 
        } 
      } else {
        return false

      }
        return ns === 0 && ew === 0; 
}
  
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))// 'should return true');

console.log(isValidWalk(['w']))// 'should return false');
console.log(isValidWalk([ 'w', 'e', 'w', 's', 'n', 'n' ]))// 'should return false');
console.log(isValidWalk(['e', 's', 'e','s', 'n', 'w','w', 'e']))// 'should return false');