function stray(numbers) {
    return numbers.find(n=> numbers.indexOf(n) === numbers.lastIndexOf(n));
  }