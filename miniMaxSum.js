const sumMinMax = (arr) => {
  let sum = 0;

  let min;

  let max;

  for (let index = 0; index < arr.length; index++) {
    for (let count = 0; count < arr.length; count++) {
      if (index === count) {
        sum -= arr[count]
      }
      sum += arr[count]    
    }
    if (min === undefined || sum < min) {
      min = sum
    }
    if (max === undefined || sum > max) {
      max = sum
    }
    sum = 0;
  }

  console.log(min, max);
}

sumMinMax([1,2,3,4,5])