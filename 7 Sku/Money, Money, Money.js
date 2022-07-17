// my solution 
//we will get 4: 

//principal
// interest, 
//tax 
// desired

//we will need to return the amount of years it will take to for the person to obtain the amount desired 
// amount will be years 
// 0 can be a valuable num 


/* example: 
Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30

*/

// CREATE A LOOP 
// ACONDITIOAL TO EVALUATE if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
function calculateYears(principal, interest, tax, desired) {
    let years = 0; 
    if (principal == desired) {
        return 0;
    } else {
        for (let index = 0; principal <= desired; index++) {
           
            principal = (interest * principal + principal - interest * principal * tax);
            years++
            }
      
        }
    return time;
    }
    
// ALTERNATIVE SOLUTION
//MORE ORGANIZED 

function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}