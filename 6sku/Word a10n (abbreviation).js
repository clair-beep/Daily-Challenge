/*
title: Word a10n (abbreviation)


Description: The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

Examples: abbreviate("elephant-rides are really fun!")
         ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
words (^):   "elephant" "rides" "are" "really" "fun"
               123456     123     1     1234     1
ignore short words:               X              X

abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
all non-word characters (*) remain in place
                    "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"

Parameters: a string ctaining at least one characters 

Return: a string with the word abreviated 

Pseudo Code: 

string becomes an arr
get the length for each word 
replace every word > 3 characters with the the first letter+ number+last letter 
return str 

*/ 

//solution 

function abbreviate(string) {
    return string.replace(/\w{4,}/g, function(w) { return w[0] + (w.length - 2) + w[w.length - 1] });
  }

console.log(abbreviate("You need, need not want, to complete this code-wars mission"))// 'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n');
// console.log(abbreviate("accessibility"))// "a11y");
// console.log(abbreviate("Accessibility"))// "A11y");
// console.log(abbreviate("elephant-ride"))// "e6t-r2e");


/*
alternative 

*/function abbreviate(string) {
    return string.replace(/\w{4,}/g, function(word) {
        return word[0] + (word.length - 2) + word.slice(-1);
      });
    }


