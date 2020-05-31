let tipCalculator = function (cost, tipPercent = .2) {
    let total = cost + (cost * tipPercent)
    return `Your food cost: ${cost}, your chosen tip is: ${tipPercent * 100}%. Total cost: ${total}`
}

let dinnerOne = tipCalculator(80, .5)
let dinnerTwo = tipCalculator(80)

console.log(dinnerOne)
console.log(dinnerTwo)