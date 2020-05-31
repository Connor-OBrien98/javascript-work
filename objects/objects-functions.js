let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'Example Book',
    author: 'A person',
    pageCount: 450
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)
console.log(otherBookSummary.pageCountSummary)

//

let tempConvert = function (f) {
    let c = (f - 32) * (5 / 9)
    let k = (f + 459.67) * (5 / 9)
    return {
        fahrenheit: `${f}`,
        celsius: `${c}`,
        kelvin: `${k}`
    }
}

let temp = tempConvert(32)

console.log(temp)
console.log(temp.fahrenheit)
console.log(temp.celsius)
console.log(temp.kelvin)