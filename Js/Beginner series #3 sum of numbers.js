function getSum( a,b ){
  if (a === b) {
    return a
  } else if (a < 0) {
  return -1
  } else {
     let result = 0;
   for (let i = a; i<=b; i++) {
     result+=i;
   }
   return result;
   }
  }