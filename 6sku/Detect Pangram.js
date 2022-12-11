/* 

Description
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

Examples:
 "The quick brown fox jumps over the lazy dog." => true
 "Example Tests" => false

 
*/

//solution 

function isPangram(string){
    string =  string.toLowerCase()
    let count = 0
    let map = {}
    for(let i = 0; i <string.length; i++) {
      if(string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123)  {
        map[string[i]] = true
      }
    }
    for (let properties in map) {
    count = count + 1
    }
    return count === 26
  }