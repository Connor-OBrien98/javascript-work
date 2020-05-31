let myAccount = {
    name: 'Connor OBrien',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    let profit = account.income - account.expenses
    return `Account for ${account.name} is $${profit}. $${account.income} in income. $${account.expenses} in expenses`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 35)
addExpense(myAccount, 100)
let summaryOne = getAccountSummary(myAccount)
resetAccount(myAccount)
let summaryTwo = getAccountSummary(myAccount)

console.log(summaryOne)
console.log(summaryTwo)

