//solution

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  } else if (begin === end) {
    return begin;
  } else {
    let result = begin;
    for (let i = begin + step; i <= end; i += step) {
      result += i;
    }
    return result;
  }
};

//alternative

const sequenceSum = (begin, end, step) => {
  var sum = 0;
  for (var i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};
