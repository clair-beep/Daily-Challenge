
// PARAMETERS =>  a string mostly with letters and a num 

// RETURN => sort a given string accorind toeach number

// EXAMPLES => 
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// PSEUDO CODE => 
// id where the numbers are placed
// sort it according to this 

//my solution

function order(words) {


    const findNumber = words.match(/[1-9]/g);
    don
    const arrayWords = words.split(' ');
  
    let result = [];  
    if (words.length === 0) return words;
  
    arrayWords.map((item, i) => { 
    const index = findNumber.indexOf((i + 1).toString());
      result.push(arrayWords[index]);
     })
   
    return result.join(' ');
  }
  
//alternative 

function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
  }