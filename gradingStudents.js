const gradingStudents = (grades) => {
  let nota;
  let result;
  let resultFinal = []
  for (let index = 0; index < grades.length; index++) {
    nota = Math.ceil(grades[index] / 5) * 5;
    result = nota - grades[index]
    if (result < 3 && nota >= 40) {
      resultFinal.push(nota);
    } else {
      resultFinal.push(grades[index]);
    }
  }
  return resultFinal
}

console.log(gradingStudents([73, 67, 38, 33]));
