let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//

let person = {
    name: 'Connor',
    age: 22,
    location: 'Greystones'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)

person.age++

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)