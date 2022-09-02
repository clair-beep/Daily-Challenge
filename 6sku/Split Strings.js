// // PARAMETERS =>    a string wih letters, could be pair or odd the amout of letters we receide 

// // RETURN => splits the string into pairs of two characters. the last 2 characters will be different depending if the are odd or pair the amount of characters 

// pair 
// If the string contains an odd number of characters then will be the same patters as before 
// odd 
// If the string contains an odd number of characters then 
// eplace the missing second character of the final pair with an underscore ('_').
// // EXAMPLES => 
// * 'abc' =>  ['ab', 'c_']    odd
// * 'abcdef' => ['ab', 'cd', 'ef']      pair
// // // PSEUDO CODE =>  

// // - differentiate between pair and odd 
// // make the str an array 
// // group every 2 characters together (maybe a loop could to)
// // for the odd tsring replace the last character 

// */  

function solution(str){
   let arr = str.split('');
   let solution = []
    if(arr.length % 2 !== 0) {
        for (let index = 0; index < arr.length -2; index+=2) {
            solution.push((arr[index] +arr[index + 1] ))
    }
        solution.push(arr[arr.length -1] + '_')

    } else {
        for (let index = 0; index < arr.length; index+=2) {
            solution.push((arr[index] +arr[index + 1] ))
        }
    }
    
    return(solution);

}
console.log(solution("abcdef"))//, ["ab", "cd", "ef"]);
console.log(solution("abcdefg"))//, ["ab", "cd", "ef", "g_"])

function solution(str){
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
  }