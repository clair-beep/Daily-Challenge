//MY SOLUTION 
function bonusTime(salary, bonus) {
    if (bonus) {
      let total = salary *10;
      return (`£${total}`);
    } else {
       let total = salary;
    return (`£${total}`);
    }
    }
//ALTERNATIVE
function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
  }