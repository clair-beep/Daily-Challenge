//MY SOLUTION
function getRealFloor(n) {
    if(n===1) {
      return 0;
    } else if(n <= 0){
      return n;
    }else if (n < 13) {
      return n-1;
    } else {
      return n-2;
    }
  }
//ALTERNATIVE
function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
  }