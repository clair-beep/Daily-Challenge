function race(v1, v2, g) {
  if (v1 >= v2) {
    return null;
  }

  // Calculate the relative speed
  let relativeSpeed = v2 - v1;

  // Calculate the time in seconds
  let timeInSeconds = Math.floor((g / relativeSpeed) * 3600);

  // Calculate the hours, minutes, and seconds
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = Math.floor(timeInSeconds % 60);

  return [hours, minutes, seconds];
}
