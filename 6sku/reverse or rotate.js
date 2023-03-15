function revrot(str, sz) {
  if (sz <= 0 || str === '' || sz > str.length) {
    return '';
  }
  let chunks = [];
  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i, i + sz);
    if (chunk.length === sz) {
      chunks.push(chunk);
    }
  }
  let result = '';
  for (let chunk of chunks) {
    let sum = 0;
    for (let digit of chunk) {
      sum += Math.pow(Number(digit), 3);
    }
    if (sum % 2 === 0) {
      result += chunk.split('').reverse().join('');
    } else {
      result += chunk.slice(1) + chunk.slice(0, 1);
    }
  }
  return result;
}
