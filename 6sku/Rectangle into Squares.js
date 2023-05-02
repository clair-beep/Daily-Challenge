function sqInRect(lng, wdth) {
  let arr = []; // create an empty array to store the lengths of the squares
  if (lng === wdth) return null; // if the length and width are equal, return null (no squares can be cut)
  while (lng > 0 && wdth > 0) {
    // continue while both length and width are greater than 0
    arr.push(lng > wdth ? wdth : lng); // push the length of the smaller side onto the array
    lng > wdth ? (lng -= wdth) : (wdth -= lng); // subtract the smaller side from the larger side
  }
  return arr; // return the array of square lengths
}
