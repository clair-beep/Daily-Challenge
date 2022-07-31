// parameters => 2 parameters, one being the array, the other is equal to the num of times of the smalest 
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// returns => the smalest numb

// examples =>nthSmallest({3,1,2} ,2) ==> return (2) 

// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 

// nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 

// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

// pseudo code => sort array 
// find smalest num per nth time 
//return num 

function nthSmallest(arr, pos){
    let result = arr.sort((a, b) => a - b).filter((element) => element === arr[pos -1]);
    return result[0];
  }

  console.log(nthSmallest([3,1,2],2))// 2);
  console.log(nthSmallest([15,20,7,10,4,3],3))// 7);
  console.log(nthSmallest([-5,-1,-6,-18],4))// -1);
  console.log(nthSmallest([-102,-16,-1,-2,-367,-9],5))// -2);
  console.log(nthSmallest([2,169,13,-5,0,-1],4))// 2) 
  console.log(nthSmallest([825 ,-698 ,1 ,27 ,-6 ,381 ,8777 ,-637 ,-245 ,3704 ,0 ,7831 ,27 ,5697],8))

  //alternative 

  function nthSmallest(arr, pos){
    return arr.sort((a,b)=>a-b)[pos-1]
  }