//MY SOLUTION
function problem(x){
    return typeof x === "number" ? x * 50 + 6 : "Error";
  }
//ALTERNATIVE
const problem = x =>  typeof x === "string" ? "Error" : x * 50 + 6;