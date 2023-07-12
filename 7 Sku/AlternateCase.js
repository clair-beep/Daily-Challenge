function alternateCase(s) {
  return s
    .split('')
    .map((x) => (x.toUpperCase() === x ? x.toLowerCase() : x.toUpperCase()))
    .join('');
}
