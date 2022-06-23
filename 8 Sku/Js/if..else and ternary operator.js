//MY SOLUTION
const saleHotdogs = n => n < 5 ? n * 100  : n >= 10 ? n * 90 : n * 95;
//ALTERNATIVE
const saleHotdogs = (n) => {
    switch (true) {
      case n < 5: return n * 100;
      case n < 10: return n * 95;
      default: return n * 90;
    }
  }