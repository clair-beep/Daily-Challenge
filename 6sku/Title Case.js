/* 

Title: Title Case

Description: 

A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Examples: 

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


Parameters:

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.


Return: 

a string into title case, maintaining lower case only   for  exceptions (minor words)
. 
PSEUDO CODE: 

lower case everythin, to start from 0

loop trhough the str

create a conditional for exceptions 

apply the upper case to the firt letter for each word 

return str 

*/ 

// solution 

function titleCase(title, minorWords) {
 
    if (!title) {
      return '';
    }
    let arr =  (title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()).split(' ');
    
     if (minorWords) {
      minorWords = minorWords.toLowerCase().split(' ')
      return arr.map(char => minorWords.includes(char) ? char : char[0].toString().toUpperCase() + char.slice(1)).join(' ')
     } else {
      return arr.map(char =>  char[0].toString().toUpperCase() + char.slice(1)).join(' ')
    
     }
      
    }

    
    //alternative 
    
    const titleCase = (title, minorWords) => {

        if (!title) 
          return title;
      
        let cap = word => 
          word[0].toUpperCase() + word.slice(1);
      
        let minors = (minorWords || '')
          .toLowerCase()
          .split(' ');
      
        let result = title
          .toLowerCase()
          .replace(/\S+/g, w => minors.indexOf(w) === -1 ? cap(w) : w);
      
        return cap(result);
      
      }