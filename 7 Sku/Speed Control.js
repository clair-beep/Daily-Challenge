function gps(s, x) {
  //Calculate distance for each section
  // Convert unit to Hours
  // calculate average speed
  //Find the maximum average between all distances
  let totalAverageSpeedPerSection = [];
  //let delta_distance = 0
  let hours = s / 3600;
  let totalDistance = x[x.length - 1];
  console.log(`totalDistance: `, totalDistance);

  for (let i = 1; i < x.length; i++) {
    let currentDistance = x[i] - x[i - 1];
    console.log(`currentDistance: `, currentDistance);

    let averageSpeed = currentDistance / hours;
    console.log(`averageSpeed:`, averageSpeed);
    totalAverageSpeedPerSection.push(averageSpeed);
  }
  let maxAverageSpeed = totalAverageSpeedPerSection[0];

  for (i = 1; i < totalAverageSpeedPerSection.length; i++) {
    if (totalAverageSpeedPerSection[i] > maxAverageSpeed)
      maxAverageSpeed = totalAverageSpeedPerSection[i];
  }

  return Math.floor(maxAverageSpeed);
}

//Alternative

const gps = (s, x) => {
  if (x.length <= 1) {
    return 0;
  }

  let output = [];
  for (let i = 0; i < x.length - 1; i++) {
    output.push(((x[i + 1] - x[i]) * 3600) / s);
  }

  return Math.max(...output);
};
