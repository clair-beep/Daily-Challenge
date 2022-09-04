//solution
function typeValidation(variable, type) {
    return typeof variable == type;
  }
  
  console.log(typeValidation('s', "number"))//, true);
  //alternativeee

  const typeValidation = (variable, type) => typeof variable === type ;