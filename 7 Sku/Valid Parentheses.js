//Solution
function validParentheses(parenStr) {
  let leftP = [];

  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === '(') {
      leftP.push(parenStr[i]);
    } else if (parenStr[i] === ')' && leftP.length > 0) {
      leftP.pop();
    } else {
      return false;
    }
  }
  if (leftP.length !== 0) {
    return false;
  }
  return true;
}
//Alternative
function validParentheses(parenStr) {
  let curr = 0;
  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === '(') {
      curr++;
    } else {
      curr--;
    }
    if (curr < 0) {
      return false;
    }
  }
  return curr === 0;
}
