/*  codewars name: Reverse every other word in the string

Description: Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

PARAMETERS =>  youn can receive a string empty or with parameters

EXAMPLES => 

1. input => "Did it work?" result => "Did ti work?")
2. input =>  "I really hope it works this time..." result =>  "I yllaer hope ti works siht time..."
3. input =>  "Reverse this string, please!" result => "Reverse siht string, !esaelp"
4. input => ("   ") result => "")


RETURN =>   a string where eversy input placed in an odd indx is reversed 

PSEUDO CODE =>  be able to aply the criteria to the desired str 
remove spaces for any str with spaces  

*/

// solution 

function reverse(str){
    return str
    .split(' ')
    .map((x,index) => index % 2 === 0 ? x :x.split('').reverse().join(''))
    .join(' ')
    .trim();
}