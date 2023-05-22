//solution

function solve(arr) {
  //code
  let result = [];
  arr = arr.join(' ').toLowerCase().split(' ');
  for (let str of arr) {
    let matches = 0;
    for (let i = 0; i < str.length; i++) {
      let position = str.charCodeAt(i) - 96;
      if (position === i + 1) {
        matches++;
      }
    }
    result.push(matches);
    // if(positionAlphabet === i + 1){

    //   console.log('match')
    // }
  }
  return result;
}

console.log(solve(['abode', 'ABc', 'xyzD']));
//alternative
function solve(arr) {
  return arr.map((x) =>
    [...x.toLowerCase()].reduce((s, v, i) => s + (v.charCodeAt() == i + 97), 0),
  );
}
