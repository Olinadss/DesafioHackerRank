const array = [2,2,1,3,2]


function birthday(s, d, m) {
  let count = 0;
  for (let index = 0; index < s.length; index += 1) {
    let subArray = s.slice(index, index + m)
    console.log(subArray);
    let sumBirthday = subArray.reduce((acc, curr) => acc + curr)

    if (sumBirthday === d) {
      count += 1
    }
  }
  return count
}

console.log(birthday(array, 4, 2));