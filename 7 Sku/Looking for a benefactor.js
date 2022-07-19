// MY SOLUTION 

function newAvg(arr, newavg) {

    let desiredAvg = newavg * (arr.length+1);
    let sum = arr.reduce((a, b) => a + b, 0);
    let exptDonation =  desiredAvg - sum;
    if(exptDonation <= 0) throw 'Expected New Average is too low'
          return(Math.ceil(exptDonation))
    
    
    
    }
//ALTERNATIVE 
function newAvg(arr, newavg) {
    let num = Math.ceil((newavg*(arr.length+1))-(arr.reduce((a,b)=>a+b,0)))
    if(num<=0){
      throw 'Expected New Average is too low'
    }else{
      return num
    }
  }

  /* 
  parameters => 
  
  arr: we are given an array that, represent the  amount of donations gives by each person, the arr coul also be empty but will alway have nums 
  newavg: the average desired to get by addig another donation 
  
  returns => 
   if arr has something, return the num needed to get the newavg
  
   if arr empty throw an error 
  
   examples => 
   [14, 30, 5, 7, 9, 11, 15, ...]
    new_avg = 30
   what num do we need in the space to be able to have get to newavg
   result: --> 149
  
  Pseudo code =>
  
    get the total of the desired average * the total amount of donors 
    rest this sum with the sum of the arr 
  result sholud be rounded up to the next integer
  return
  */ 