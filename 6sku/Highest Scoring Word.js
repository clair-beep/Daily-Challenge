

// PARAMETERS => a string with letter, the strig will aiways have  a value and be lowercase


// RETURN => the word with the h)gest cord, were each letter wii be given a value accord)Ng to the current order in the alphabet 

// EXAMPLES => Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// ('take me to semynak'), 'semynak'); 
// PSEUDO CODE => 

// find if chars, give this value to letters
// create a loop to evaluuate each vaue per word 
// find the highest word 
// return word with idx  



//solution
function high(x){
    x = x.toUpperCase().split(' ');
    let total = [];
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        let tempArr = x[i].split('');
        tempArr.map((element) => { 
            let num = element.charCodeAt() - 64;
            sum += num;
         })           
        total.push(sum)
        sum = 0;
    }
    let value = 0;
    total.forEach((element) => {
        if (value < element) {
            value = element;
        }
      });
    const index = total.findIndex((word) => word === value);
    return x[index].toLowerCase();

//alternative
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }
