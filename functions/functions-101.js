let convertTemp = function (temp) {
    let celsius = (temp - 32) * 5 / 9
    return celsius
}

let tempOne = convertTemp(32)
let tempTwo = convertTemp(68)

console.log(tempOne)
console.log(tempTwo)



