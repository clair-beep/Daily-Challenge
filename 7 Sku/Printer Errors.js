// MY SOLUTION 
//pameters =>  you wyiireceive a string that can contain letters from a to m which are good ahd n to z that are considered  errors 

//returns => count the num of errors and return a num 

// //examples => s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// make a variable to define errors 
// make str an arr 
// loop through itr 

function printerError(s) {
    let count = 0;
    s = s.split('');
    const errors = ['o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
        for (let error of s) {
            if (errors.includes(error)) {
                count++;
            }
        }
    
        // return string of errors count 

        return `${count}/${s.length}`;
}


//ALTERNATIVE
function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}