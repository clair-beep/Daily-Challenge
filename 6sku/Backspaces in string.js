/*
title:Backspaces in string




Description: IAssume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Parameters: 
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

Return: 

the final string asuming every '#' equals a backspace





*/

//solution 
function cleanString(s) {
    let arr = [];
    s.split('').forEach(item => {
        item !== '#' ? arr.push(item) : arr.pop();
    })
    return arr.join('')
}
/*
alternative 

function clean_string(s) {
  const result = []
    for (const c of s) {
    if (c === "#") {
      result.pop()
    } else {
      result.push(c)
    }
  }
  return result.join("")
}
2 similar code vari
*/

