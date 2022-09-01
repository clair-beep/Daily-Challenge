// PARAMETERS =>    will receide a string with only letters inside of if, seems it coul de upper case or lower case aditionally you may also receive symbols, spaces 

// RETURN => the position in the alphabet, each will be sev

// EXAMPLES => alphabetPosition("The sunset sets at twelve o' clock.")

// // PSEUDO CODE =>  need to make all the string to lowerscase // filter unwanted characters

//push to a new arr the position of the letter 
// solution 

function alphabetPosition(text) {
    let position = [];
    const arr = text.toLowerCase().split('')
    for (let index = 0; index < arr.length; index++) {
            position.push(arr[index].charCodeAt(0) - 96 )
        }    
    return position.filter(e => e < 27 && e >= 1  ).join(' ');
}

//alternative


function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
    .filter( letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    }  )
    .map( letter => alphabet.indexOf(letter) + 1 )
    .join(' ')
  }