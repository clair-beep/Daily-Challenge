//MY SOLUTION
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump / mpg <= fuelLeft ) {
      return true;
    } else {
       return false;
    }
    };
//ALTERNATIVE 

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  };