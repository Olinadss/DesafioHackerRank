const birds = [1, 2, 3, 4, 5, 4, 4, 2, 1, 3, 4]

function migratoryBirds(arr) {
  let countBirds = {};

  arr.forEach((count) => {
    countBirds[count] = (countBirds[count] || 0) + 1
  });

  const maxBirds = Math.max(...Object.values(countBirds));
  const keyBirds = Object.keys(countBirds).find((key) =>  countBirds[key] === maxBirds)
  return keyBirds
}

console.log(migratoryBirds(birds));