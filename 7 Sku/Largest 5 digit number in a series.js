// ALTERNATIVE
function solution(digits){
  let answer = 0;
  
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
    if(Number(number) > answer){       //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}

//MY SOLUTION 

function solution(digits){
    digits =  Array.from(String(digits));
    let temp = 0;
    let sequence = 0;
    for (let i = 0; i < digits.length - 4; i++) {
     temp = +digits.slice(i, i + 5).join('');
     // console.log(temp);
     if (temp > sequence  ) {
       // console.log('Hello');
 
       sequence = temp
     }
   }
  
 return sequence;
 } 