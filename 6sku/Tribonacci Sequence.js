function tribonacci(signature, n) {
  let final = signature;
  if (n === 1) {
    return [signature[0]];
  } else if (!n) {
    return [];
  } else {
    for (let i = 3; i < n; i++) {
      let result = final[i - 1] + final[i - 2] + final[i - 3];

      final.push(result);
    }
  }

  return final;
}

//Alternative

function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}

//Alternative
