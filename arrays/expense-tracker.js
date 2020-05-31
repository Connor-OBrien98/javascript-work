const account = {
    name: 'Connor OBrien',
    expenses: [],
    income: [],
    addExpense: function (desc, amount) {
        const expense = {
            description: desc,
            cost: amount
        }
        this.expenses.push(expense)
    },
    addIncome: function (desc, amount) {
        this.income.push({
            description: desc,
            cost: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0

        this.expenses.forEach(function (expense) {      
            totalExpenses += expense.cost 
        })

        this.income.forEach(function (income) {      
            totalIncome += income.cost 
        })
        return `${this.name} has $${totalIncome - totalExpenses}. $${totalIncome} in income, $${totalExpenses} in expenses.`
    }
}

account.addExpense('Coffee', 4)
account.addExpense('Rent', 500)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())

