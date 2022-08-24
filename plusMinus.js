const plusMinus = (array) => {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > 0) {
      positive += 1;
    } else if (array[index] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }   
  }

  console.log((positive / array.length).toFixed(6));
  console.log((negative / array.length).toFixed(6));
  console.log((zero / array.length).toFixed(6));

}

plusMinus([1,1,0,-1,-1])