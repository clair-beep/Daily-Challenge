//SOLUTION 

// parameters => you get 2 values,  a num reprenting the total salary and an arr of Number or 

// returns => return a num reprenting the total num of cards you can buy 

// examples => salary :2000  
// bills:500, 160, 400
// total amount of notes: 188

// pseudo code => get the total amount of expenses 
// => check how many notes you can afford 

function getNewNotes(salary,bills){
    let net = (salary - bills.reduce((x,y) => x + y, 0)) / 5;
 return net;
 }
//ALTERNATIVE
function getNewNotes(salary,bills){
    const result = Math.floor((bills.reduce((gross, bill) => gross - bill, salary)) / 5)
    return result >= 0 ? result : 0
  }