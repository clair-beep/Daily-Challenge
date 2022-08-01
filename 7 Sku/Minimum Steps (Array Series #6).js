// parameters =>
// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.
// returns =>  a number that rep how many times you have to add up the smallest numbers 

// examples =>
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)

// Explanation:

//     We add two smallest elements (1 + 2), their sum is 3 .

//     Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

//     Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .
// pseudo code => sort the arr
// loop through it to find the amount of times to arrive to value 
function minimumSteps(numbers, value) {
    let sum = 0;
    TimeRanges= 0;
    numbers.sort((a, b) => a - b);
        for (let i = 0; sum < value; i++) {
            sum += numbers[i];
            TimeRanges = i;
        }
    return TimeRanges;
}

console.log(minimumSteps([4,6,3], 7))// 1;
console.log(minimumSteps([10,9,9,8], 17))// 1;
console.log(minimumSteps([8,9,10,4,2], 23))// 3;

//alternative

function minimumSteps(numbers, value){
    return numbers.sort((a,b)=>a-b).filter((e,i)=> (value=value-e) > 0).length;
 }