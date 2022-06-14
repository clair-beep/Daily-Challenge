//MY SOLUTION 
function expressionMatter(a, b, c) {
    const results = [];
    results[0] = a * (b + c);
    results[1] = a * b * c;
    results[2] = a * b + c;
    results[3] = a + b * c;
    results[4] = (a + b) * c;
    results[5] = a + b + c;
    return Math.max(...results);
  }
//ALTERNATIVE
function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    );
  }

  //test 