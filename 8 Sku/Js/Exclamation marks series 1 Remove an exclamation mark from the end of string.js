// solution
function remove(s) {
  if (s.endsWith('!')) {
    return s.slice(0, -1);
  }
  return s;
}

//alternative
const remove = (s) => s.replace(/!$/, '');
