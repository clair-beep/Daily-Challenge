/*
// PARAMETERS =>    

enteredCode: will rep the coupon code entered by the customer  
correctCode: will rep the actual or valid code  
currentDate: will rep the date when the req was placed
 expirationDate: will rep the expiration date of the code

// RETURN => true or false, that will indicate wheter the coupon is valid or not 
// EXAMPLES => 
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// // PSEUDO CODE =>  
*/
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

    const d1 = new Date(currentDate);
    const d2 = new Date(expirationDate);
    // Create new Date instance
    const d3 = d1.setDate(d1.getDate() + 1)
  
    if(d3 >= d2 && enteredCode === correctCode)  {
      return true;
  } else{
      return false;
  }
  }
  
  console.log(checkCoupon('123ablqc0','123ablqc0','July 5, 2000','July 5, 2000'))//, true);
  console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))//, false);
  
  //alternative

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }