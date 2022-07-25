// parameters =>  array of numbers
// parameters => number reprents the length of new arr 

// returns => a new array of length number containing the last even numbers from the original array (in the same order)

// examples => ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
//([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
//([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// pseudo code => id all pair num into a single arr
// => create aconditional for arr> 3 use slice to only keep 3nums 
// => return new arr 


function evenNumbers(array, number) {
    let arr = [];
    for (let i = array.length; i => 0; i--) {
        if(arr.length>= number){
            break;} 
        else {
            if (array[i] % 2 == 0) 
                arr.unshift(array[i])
            }
        }
    return arr;
    }

    
    //ALTERNATIVE SOLUTION

    const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);