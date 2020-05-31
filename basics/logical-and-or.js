isGuestOneVegan = true
isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('vegan menu')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('both options')
} else {
    console.log('full menu')
}