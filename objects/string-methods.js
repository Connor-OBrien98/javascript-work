let name = '   Connor OBrien   '

console.log(name.length)

console.log(name.toLowerCase())

let password = '123abcpassword234'
console.log(password.includes('password'))

console.log(name.trim())



let isValidPassword = function (password) {
   return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('123'))
console.log(isValidPassword('123asbsjfifjdis'))
console.log(isValidPassword('123sjuajdipassword'))