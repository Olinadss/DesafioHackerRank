const appleAndOrange = (s, t, a, b, apples, oranges) => {
  let applesCount = 0;
  let orangesCount = 0;

  for (let index = 0; index < apples.length; index++) {
    if ((apples[index] + a) >= s && (apples[index] + a) <= t) {
      applesCount += 1
    }
  }

  for (let index = 0; index < oranges.length; index++) {
    if ((oranges[index] + b) >= s && (oranges[index] + b) <= t) {
      orangesCount += 1
    }
  }

  console.log(applesCount);
  console.log(orangesCount);
}

appleAndOrange(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])