//my solution 
function hoopCount (n) {
    return n >= 10 ? "Great, now move on to tricks":"Keep at it until you get it"     
  }

  //alternative 

  function hoopCount (n) {
    const HOPS_LIMIT = 10
    return n >= HOPS_LIMIT
      ? 'Great, now move on to tricks'
      : 'Keep at it until you get it';
 }