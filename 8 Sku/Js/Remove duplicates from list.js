//solution
function distinct(a) {
  const set1 = new Set(a);

  return Array.from(set1);
}

//alternative

function distinct(a) {
  return [...new Set(a)];
}
