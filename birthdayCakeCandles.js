const birthdayCakeCandles = (arr) => {
  let count = 0;
  let maiorVela = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === maiorVela) {
      count += 1
      maiorVela = arr[index]
    }
    if (arr[index] > maiorVela) {
      count = 1
      maiorVela = arr[index]
    }
  }
  return count;
}

birthdayCakeCandles([3, 2, 1, 3, 4, 4, 4, 4, 4])