// parameters =>  Array
// Array/list will contain positives only .
// Array/list will always have even size

// returns => a number  that rep  the minimum sum which is obtained from summing each Two integers product .

// examples => minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

// minSum({12,6,10,26,3,24}) ==> return (342)

// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

// pseudo code => separate each integer into individual variables 
//  loop trhough using index to be able to * between them 
// return the sum 



function minSum(arr) {
    arr = arr.sort((a, b) => a - b)
    console.log(arr);
    const arr1 = arr.slice(0, arr.length/2);
    const arr2 = arr.slice( arr.length/2, arr.length).sort((a, b) => b - a )
    console.log(arr1);
    console.log(arr2);
    let sum = 0;
    arr1.forEach((list1, index) => {
      const list2 = arr2[index];
      sum += list1 * list2;
    });
    return sum;
    }
    console.log(minSum([5,4,2,3]));
    console.log(minSum([12,6,10,26,3,24]));
    console.log(minSum([9,2,8,7,5,4,0,6]));


    //alternative solution

    function minSum(arr) {
        return arr.sort( (a,b) => a-b )
                  .slice(0, arr.length/2)
                  .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
      }