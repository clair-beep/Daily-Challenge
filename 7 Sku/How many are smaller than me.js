function smaller(num) {
  const n = num.length;
  const counts = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (num[j] < num[i]) {
        counts[i]++;
      }
    }
  }

  return counts;
}
