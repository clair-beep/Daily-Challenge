//MY SOLUTION 
function getAverage(marks){
    return Math.floor((marks.reduce(
      (a, x) => a + x, 0))/marks.length);
    }
//ALTERNATIVE
function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }