//MY SOLUTION 
function solution(str, ending){
    // PREP
    //PARAMETERS
    //  compare 2 argument, ckecking if the ending of the first parameter match the the secondone
    // Str  - ending strings 
      
    //RETURNS 
    // how do you want me to return this/ in the console?
    //EXAMPLE 
      //abcde', 'cde'), true)
    // ('abcde', 'abc'), false)
      
    //pseudo code 
    //
      
    // compare each other 
    
      return str.endsWith(ending);
    }

//ALTERNATIVE 
function solution(str, ending){
    if (typeof(str) != "string" || typeof(ending) != "string")
      throw "wrong type";
    if (ending.length>str.length)
      return false;
    return str.substr(str.length-ending.length, ending.length) == ending;
  }
