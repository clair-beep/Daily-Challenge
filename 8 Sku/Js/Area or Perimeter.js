//mine
const areaOrPerimeter = function(l , w) {
    if (l === w) {
      return l ** 2
    } else {
       return (l + w) * 2
    }
  };
//aternative
const areaOrPerimeter = function(l , w) {
    let area = l * w;
    let perimeter = (l + w) * 2;
    
    return l === w ? area : perimeter;
  };