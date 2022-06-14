//alternative
function stairsIn20(a) {
    return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
  }

//my solution

function stairsIn20(s){
    return s.map(num => num.reduce((acc, curr) => acc + curr, 0)).reduce((a, b) => a + b, 0) * 20;
      
    }