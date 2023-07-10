function filterString(str) {
  let filteredStr = '';

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      filteredStr += str[i];
    }
  }

  return +filteredStr;
}
