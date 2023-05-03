function switcheroo(x) {
  let map = { a: 'b', b: 'a' };
  let switched = x
    .split('')
    .map((x) => map[x] || x)
    .join('');
  return switched;
}
