//MY SOLUTION
function filter_list(l) {
    return l.filter( str => typeof str != 'string');
    }
//ALTERNATIVE
function filter_list(l) {
    return l.filter(v => typeof v == "number")
   }