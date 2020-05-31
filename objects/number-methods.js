let num = 104.235
console.log(num.toFixed(1))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20

let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
console.log(randomNum)

let makeGuess = function (guess) {
    let min = 0
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)

    return randomNum === guess
}

console.log(makeGuess(5))


