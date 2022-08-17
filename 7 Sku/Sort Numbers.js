//alternative
const solution = nums =>
  nums ?
  nums.sort((a,b) => a-b) :
  [];
//solution 
function solution(nums){
    if (nums===null) {
      return []
    } else {
      
      return nums.sort((a, b) => a - b)
  }
  }