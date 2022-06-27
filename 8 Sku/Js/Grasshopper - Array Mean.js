// ALTERNATIVE
const findAverage = function(nums){
    return nums.reduce((a, b) => a + b, 0) / nums.length;
  }
//MY SOLUTION
const findAverage =(nums) => nums.reduce((x, y) => x + y, 0) / nums.length;