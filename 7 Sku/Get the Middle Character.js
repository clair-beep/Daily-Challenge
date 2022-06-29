//my solution 
function getMiddle(s)
{
    let letter = [];
    s.split('-');
    if(s.length % 2 ===0){
        for (let i = (s.length /2 -1); i <= (s.length/2); i++) {
            letter.push(s[i]);
            
        }
    } else{
        console.log(s.length);
            for (let x = Math.ceil((s.length /2 -1)); x < Math.ceil((s.length/2)); x++) {
                letter.push(s[x]);

            }
        }
    


return letter.join('');
}
//alternative
function getMiddle(s)
{
  let middle = Math.floor(s.length/2);
  
  return s.length % 2 === 0
        ? s.slice(middle-1, middle+1)
        : s.slice(middle, middle+1);
  
}