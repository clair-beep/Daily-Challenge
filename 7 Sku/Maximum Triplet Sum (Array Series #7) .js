
// parameters =>

// Array/list size is at least 3 

// Array/list numbers could be a mixture of positives , negatives and zeros 

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing)

// returns => maximum triplet sum in the array Without duplications 

// examples => 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)

// Explanation:

// As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// pseudo code =>  sort the array 
// sum the first 3 nums of the arr 
// return the num
function maxTriSum(numbers) {
    let maxSum = 0;
    let uniqueChars = numbers.sort((a, b) => b - a ).filter((c, index) => {
        return numbers.indexOf(c) === index;
    });

for (let index = 0; index < 3; index++) {
    maxSum += uniqueChars[index];
}
    return maxSum;
}

//alternative 

function maxTriSum(numbers){
    return [...new Set(numbers)]
      .sort( (a,b) => a - b)
      .slice(-3)
      .reduce( (acc,el) => acc + el);
  }


console.log(maxTriSum([3,2,6,8,2,3])) // 17)
console.log(maxTriSum([2,9,13,10,5,2,9,5])) // 32)
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4])) // 18)
console.log(maxTriSum([-3,-27,-4,-2,-27,-2])) // -9)
console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12])) // -33)
console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67])) // 232)
console.log(maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29])) // 41)
console.log(maxTriSum([-2,0,2])) // 0)
console.log(maxTriSum([-2,-4,0,-9,2])) // 0)
console.log(maxTriSum([-5,-1,-9,0,2])) // 1)