//my solution 
const reverse = string => string.split(' ').reverse().join(' ');
//alternative
function reverse(string){
    // validate input
    if (typeof(string) !== 'string') throw new Error('reverse: parameter is not a string!');
    // just use the dumb way out since it's jabbascripps
    return string.split(' ').reverse().join(' ');
  }

  if (s.length % 2 === 0){
    return s.slice( (s.length/2) -1, s.length/2)
  };
  