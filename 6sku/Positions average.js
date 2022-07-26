// parameters =>  string of  numbers
// parameters =>  substrings (n >= 2) 

// returns => a new array of length number containing the last even numbers from the original array (in the same order)

// examples => ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
//([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
//([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// pseudo code => id all pair num into a single arr
// => create aconditional for arr> 3 use slice to only keep 3nums 
// => return new arr 


function posAverage(s) {
    let com=0;
    let all=0;
    const arr = s.split`, `
    console.log(`This is arr before the loop ${arr}`);
    for (let i=0;i<arr.length-1;i++){
      for (let j=i+1;j<arr.length;j++){
        console.log(`This is arr [j] ${arr[j]}`)
        let tempArr=arr[j].split('')
        console.log(`this is tempArr ${tempArr}`)
        console.log(`this is arr[i].split${arr[i].split('') }`);
        arr[i].split('').map((element,index)=>element===tempArr[index]?com++:all++)
        console.log(`Ths is com ${com}, this is all ${all} at during the loop`)

      }
    }
    console.log(`Ths is com ${com}, this is all ${all} at the end`)
    return com / (all+com) * 100;
}

  console.log(posAverage('6900690040, 4690606946,9990494604'));
  console.log(posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"));

  //alternative 

  function posAverage(s) {
    
    let matches = 0;
    const substrings = s.split(', ');
    const subLength = substrings[0].length;
    const numPositions = subLength * (substrings.length * (substrings.length - 1)) / 2;
    
    for (let i = 0; i < substrings.length; i++) {
      for (let j = i+1; j < substrings.length; j++) {
        for (let k=0; k<subLength; k++) {
          matches += substrings[i][k] === substrings[j][k]
        } 
      }
    }
    
    return 100 * (matches / numPositions);
}