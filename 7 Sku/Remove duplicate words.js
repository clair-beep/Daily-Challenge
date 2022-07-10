//ALTERNATIVE

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')
// MY SOLUTION
function removeDuplicateWords (s) {
    s = s.split(' ');
   
    const unique = Array.from(new Set(s));
    return unique.join(' ');
    // your perfect code...
  }