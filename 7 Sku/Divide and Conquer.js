//ALTERNATIVE


const divCon = x => x.reduce((acc, el) => typeof el === 'string' ? acc - Number(el) : acc + el, 0)


//MY SOLUTION 
// parameteres mixed stings and num in an array 

//  return the diference from num  - string 
// return will be a num 

// examples: [9, 3, '7', '3']), 2); 
// num: 9, 3
// striNg: '7', '3'
// result: num - string = 2

// create reparate variables for string 
// create reparate variables for nums
// rest 
// return 



function divCon(x){
    let string = x.filter(element => typeof element === 'string').reduce(
      (x, y) => +x + +y,0);
    let nums = x.filter(element => typeof element === 'number').reduce(
      (x, y) => +x + +y,0);
    
      return nums - string;
    }