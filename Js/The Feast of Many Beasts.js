//alternaTIVE 
function feast(beast, dish) {
    return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
  }

  //my solution 
  function feast(beast, dish) {
    if(beast.slice(-1) === dish.slice(-1) && beast.slice(0,1) === dish.slice (0,1))   {
      return true 
    } else {
      return false 
    }
     
}