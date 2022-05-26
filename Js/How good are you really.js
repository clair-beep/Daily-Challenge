///my solution 

function betterThanAverage(classPoints, yourPoints) {
    const initialValue = 0;
  const average = classPoints.reduce((previousValue,currentValue ) => previousValue + currentValue,
    initialValue
    ) / classPoints.length;
    if (average < yourPoints) {
      return true;
    } else {
          return false; 
  
    }
  }


//alternative 
function betterThanAverage(classPoints, yourPoints) {
    const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
    const classAverage = classPointsSum / classPoints.length;
    const isBetter = yourPoints > classAverage;
    return isBetter;
  }