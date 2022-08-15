// PARAMETERS =>  three integer values as arguments, in the following order:
    // small -> number of small chocolates available
    // big -> number of big chocolates available
    // goal -> the desired weight of the final parcel

// RETURN =>The function should return the number of small chocolates required to achieve the goal. The function should return -1 only if the goal cannot be achieved by any possible combination of big chocolates and small chocolates.

// EXAMPLES => 
 
    // (makeChocolates(4, 1, 13) result => 4);
    // (makeChocolates(4, 1, 14) result => -1);
    // (makeChocolates(2, 1, 7) result => 1);
    // (makeChocolates(3, 1, 6) result => 3);
    // (makeChocolates(8, 0, 7) result => -1);
    // (makeChocolates(8, 0, 7) result => -1);


function makeChocolates(small, big, goal) {
    for (let s = 0; s<=small; s++){
      for (let b = 0; b<=big; b++){
        if (b * 5 + s * 2 === goal) return s;
      }
    // }
    return -1
  }