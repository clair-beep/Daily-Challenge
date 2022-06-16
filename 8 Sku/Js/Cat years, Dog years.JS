//MY SOLUTION 
function humanYearsCatYearsDogYears(humanYears) {
    let total = [humanYears];
    let catYears = 24;
    let dogYears = 24;
    if (humanYears < 2) {
      return [1,15,15];
    } else if (humanYears < 3) {
      return [2,24,24];
    } else {
      
    } catYears += (humanYears -2) *4;
      dogYears += (humanYears -2) *5;
     total.push(catYears, dogYears);
      return total;
    }
//ALTERNATIVE
function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
      case 1:
        return [1, 15, 15]
      case 2:
        return [2, 24, 24];
      default:
        return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
    }
    
  }