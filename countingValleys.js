const steps = 8;

const path = "UDDDUDUU";

function countingValleys(steps, path) {

  let countValleys = 0

  let sum = 0
  for (let index = 0; index < steps; index++) {
    if (path[index] === 'D') {
      sum -= 1;
    } else {
      if (sum === -1) {
        countValleys += 1
      }
      sum += 1
    }  
  }
  
  return countValleys
}

console.log(countingValleys(steps, path));
