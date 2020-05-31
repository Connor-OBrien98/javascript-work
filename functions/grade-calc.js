const gradeCalculator = function (score, max) {
    const percent = (score / max) * 100
    let grade

    if (percent >= 90) {
        grade = 'A'
    } else if (percent <= 89 && percent >= 80) {
        grade = 'B'
    } else if (percent <= 79 && percent >= 70) {
        grade = 'C'
    } else if (percent <= 69 && percent >= 60) {
        grade = 'D'
    } else if (percent <= 59 && percent >= 0) {
        grade = 'F'
    } else {
        console.log('invalid score')
    }

    return `Your grade was: ${grade} (${percent}%)!`
}

const studentOne = gradeCalculator(19, 20)
const studentTwo = gradeCalculator(17, 20)
const studentThree = gradeCalculator(15, 20)
const studentFour = gradeCalculator(13, 20)
const studentFive = gradeCalculator(5, 20)

console.log(studentOne)
console.log(studentTwo)
console.log(studentThree)
console.log(studentFour)
console.log(studentFive)