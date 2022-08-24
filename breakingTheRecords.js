const score = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) {
  let highestScoreCount = 0
  let lowestScoreCount = 0

  let highestScore = scores[0];
  let lowestScore =  scores[0];

  for( let index = 1; index < scores.length; index += 1) {
    if (scores[index] > highestScore) {
      highestScoreCount += 1
      highestScore = scores[index]
    }
    if (scores[index] < lowestScore) {
      lowestScoreCount += 1
      lowestScore =  scores[index]
    } 
     
  }
 return `${highestScoreCount}, ${lowestScoreCount}`;
}

console.log(breakingRecords(score))
