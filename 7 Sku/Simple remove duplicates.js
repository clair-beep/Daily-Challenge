//Solution
function solve(arr) {
  let set = new Set(arr.reverse());
  const newArray = Array.from(set);

  return newArray.reverse();
}

//alternative
function solve(arr) {
  return arr.filter((val, i) => arr.lastIndexOf(val) == i);
}
