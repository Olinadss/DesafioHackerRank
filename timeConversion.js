const timeConversion = (s) => {
  let splitHour = s.split(':')
  let horas = Number(splitHour[0])
  let newHour;
  if (s.includes('AM')) {
    if (horas === 12) {
      splitHour[0] = '00'
    }
    return `${splitHour[0]}:${splitHour[1]}:${splitHour[2].replace('AM', '')}`
  }
  if (s.includes('PM') && horas !== 12) {
      splitHour[0] = horas + 12;
  }
 return `${splitHour[0]}:${splitHour[1]}:${splitHour[2].replace('PM', '')}`

}

console.log(timeConversion('12:55:44PM'));