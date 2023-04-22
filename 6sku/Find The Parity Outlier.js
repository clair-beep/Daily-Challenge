// solution
function findOutlier(integers) {
  let result = integers.filter((n) => n % 2 === 0);
  if (result.length > 1) {
    result = integers.filter((n) => n % 2 !== 0);
    return parseInt(result);
  } else {
    return parseInt(result);
  }
}
//Alternative

function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
