//my solution 
function paperwork(n, m) {
    if (n < 0 || m < 0) {
      return 0
    } else {
      return n * m;
    }
  }

  //alternative 

  function paperwork(n, m) {
    if (m < 0 || n < 0) {
      return 0;
    }
    return m * n;
  }