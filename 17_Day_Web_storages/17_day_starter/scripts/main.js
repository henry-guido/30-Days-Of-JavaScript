// Exercises: Level 1

// 1. Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem('first name','Henry')
localStorage.setItem('last name','Guido')
localStorage.setItem('age',28)
localStorage.setItem('country','Nicaragua')
localStorage.setItem('city','Managua')

// Exercises: Level 2

//  1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    'first name': 'Mayra',
    'last name': 'Guido',
    age: 35, 
    skills:['CSS','HTML','JavaScript'],
    country: 'Nicaragua'
}

const student2 = JSON.stringify(student)

localStorage.setItem('student',student2)


//  Exercises: Level 3

// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.










