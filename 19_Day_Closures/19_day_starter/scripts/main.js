// Exercises: Level 1

// 1. Create a closure which has one inner function

function event1() {
    let state

    function login() {
        state = true
        return state
    }
    return login
}

const login = event1()
// console.log("login", login())



// Exercises: Level 2
// 2. Create a closure which has three inner functions

function event2() {
    let state

    function login() {
        state = true
        return state
    }

    function logoff() {
        state = false
        return state
    }
    return {
        login22: login(),
        logoff: logoff()
    }
}

const innerfunctions = event2()
// console.log(innerfunctions)
// console.log("login", innerfunctions.login22)



// Exercises: Level 3

//Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

//https://www.pluralsight.com/guides/javascript-closures

function personAccount() {
    let firstname = 'Henry',
        lastname = 'Guido',
        incomes = [],
        expenses = []
    function totalIncome() {
        return incomes.reduce((a,b)=> a + b.income,0)
    }
    function totalExpense() {
        return expenses.reduce((a,b)=> a + b.expense,0)
    }
    function accountInfo() {
        return {
            'account name': `${firstname} ${lastname}`,
            totalIncome: totalIncome(),
            totalExpense: totalExpense()
        }
    }
    function addIncome(des, income) {
        incomes.push({ description: des, income: income })
        return incomes
    }
    function addExpense(des,expense) {
        expenses.push({ description: des, expense: expense })
        return expenses
    }
    function accountBalance() {
        return totalIncome() - totalExpense()
         
    }
    return {
        addIncome: addIncome,
        addExpense:addExpense,
        accountInfo: accountInfo,
        totalIncome: totalIncome,
        accountBalance:accountBalance,

    }
}

//primero se declara una variable con la funcion externa 
const innerPerson = personAccount()

//despues se llama la variable con la la funcion interna
 console.log(innerPerson.addIncome('Ingreso 1',100))
console.log(innerPerson.addIncome('Ingreso 2',250))
console.log(innerPerson.addExpense('gasto 1',50))


console.log(innerPerson.accountInfo())


console.log(innerPerson.totalIncome())
console.log(innerPerson.accountBalance()) 










