// returns => Find all the LEADERS in the array by check)ng if num is greater than the sum to it's right. Return an Array/list  store the leading numbers in the same order in the original array/list .

// examples => 

// Input >> Output Examples

// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}

// Explanation:

//     4 is greater than the sum all the elements to its right side

//     Note : The last element 0 is equal to right sum of its elements (abstract zero).

// arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}

// Explanation:

//     17 is greater than the sum all the elements to its right side

//     5 is greater than the sum all the elements to its right side

//     Note : The last element 2 is greater than the sum of its right elements (abstract zero).

// arrayLeaders ({5, 2, -1}) ==> return {5, 2}

// Explanation:

//     5 is greater than the sum all the elements to its right side

//     2 is greater than the sum all the elements to its right side

//     Note : The last element -1 is less than the sum of its right elements (abstract zero).

// arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}

// Explanation:

//     0 is greater than the sum all the elements to its right side

//     -1 is greater than the sum all the elements to its right side

//     3 is greater than the sum all the elements to its right side

//     Note : The last element 2 is greater than the sum of its right elements (abstract zero). 

// pseudo code => create a loop 
// use slice to evaluate if sum is greater 
// create a conditional for the larst num of the arr

function arrayLeaders(numbers){
    let com = [];
    for (let i = 0; i < numbers.length; i++) {
       console.log(numbers.slice(i, numbers.length));
       if(numbers[i] > numbers.slice(i + 1, numbers.length).reduce((x, y) => x + y, 0)) {
        com.push(numbers[i])
       }
    }
    console.log(`com: ${com}`);
  }


  //ALTERNATIVE 

  var arrayLeaders = numbers => {
    return numbers.filter((a, i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a)}