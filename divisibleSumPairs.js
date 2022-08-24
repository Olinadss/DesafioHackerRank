const ar = [1, 3, 2, 6, 1, 2]

function divisibleSumPairs(n, k, ar) {
  let countPairs = 0;
  for(let index = 0; index < n; index += 1) {
    for(let j = 0; j < n; j += 1) {
      if (index != j) {
        if ((ar[index] + ar[j]) % k === 0) {
          countPairs += 1; 
        }
      }        
    }      
  };
  return countPairs / 2;
}

console.log(divisibleSumPairs(6, 3, ar));
