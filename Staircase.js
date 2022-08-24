
const staircase = (n) => {
  const symbol = '#';
  let inputLine = '';
  let space = n - 1;

  for (let indexLine = 0; indexLine < n; indexLine += 1) {
    for (let indexColomn = 0; indexColomn < n; indexColomn += 1) {
      if (indexColomn < space) {
        inputLine += ' ';
      }
      else {
        inputLine += symbol;
      }    
    }
    console.log(inputLine);
    inputLine = ''
    space -= 1;
  }
}

staircase(5)

