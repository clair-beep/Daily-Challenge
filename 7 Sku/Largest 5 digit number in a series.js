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