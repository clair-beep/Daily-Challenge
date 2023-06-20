//Explanation

// The given code defines a function called isTriangle that takes three parameters: a, b, and c. This function is used to determine whether a set of three side lengths (a, b, and c) can form a valid triangle.

// The logic of the function is based on the triangle inequality theorem, which states that the sum of the lengths of any two sides of a triangle must be greater than the length of the third side. If this condition is true for all three combinations of sides, then a triangle can be formed.

function isTriangle(a, b, c) {
  if (a > b + c) {
    return false;
  } else if (b > a + c) {
    return false;
  } else if (c > b + a) {
    return false;
  } else {
    return true;
  }
}

//Alternative

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}
