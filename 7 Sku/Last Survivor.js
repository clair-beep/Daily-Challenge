//solution
function lastSurvivor(letters, coords) {
    letters = letters.split('')
    for(let i = 0; i < coords.length; i++) {
      letters.splice(coords[i], 1)
    }
  return letters.join('')
  }
//alternative

function lastSurvivor(string, indices) {
    const arr = [...string];
    for (const i of indices) arr.splice(i, 1)
    return arr[0];
  }