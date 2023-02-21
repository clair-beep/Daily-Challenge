/* title:Array Character with longest consecutive repetition




Description: For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Return: 

 return an array with 2 elements, one representing the characters with most consecutive repetion and the value such as:
["", 0]

 
Pseudo Code: 

Check if the input string is empty.
Loop through the string 
 keeping track of the current character and the length of the consecutive repetition of that character. 
 If the current character is the same as the previous character, the length is incremented. 
 If the current character is different, the length of the previous repetition is compared to the current maximum length, and if it is greater, the maximum length and corresponding character are updated.

 After the loop, the last repetition is checked to see if it is longer than the current maximum. If it is, the maximum is updated one final time.


*/

//first solution

function longestRepetition(s) {
  let max = 1,
    currLength = 1,
    prev = s[0],
    maxChar = s[0];
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === prev) {
      currLength++;
    } else {
      prev = s[i];
      let temp = max;
      max = Math.max(currLength, max);
      currLength = 1;
      if (temp !== max) {
        maxChar = s[i - 1];
      }
    }
  }
  max = Math.max(currLength, max);
  return [maxChar, max];
}

//final

function maxRepetition(s) {
  if (s === '') {
    return ['', 0];
  }

  let currentChar = s[0];
  let currentLength = 1;
  let maxChar = currentChar;
  let maxLength = currentLength;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentChar) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxChar = currentChar;
      }
      currentChar = s[i];
      currentLength = 1;
    }
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxChar = currentChar;
  }

  return [maxChar, maxLength];
}
