
alert('Open the console and check if the countries has been loaded')

import {countries} from '../data/countries_data.js'

// Exercises:Level 1

// 1. Display the countries array as a table

// console.table(countries);



// 2. Display the countries object as a table

// for(let i of countries) {
//     console.table(i);
// }




// 3. Use console.group() to group logs

// console.group('Countries')
// console.table(countries);
// console.groupEnd()

// Exercises:Level 2

// 10 > 2 * 10 use console.assert()

console.assert(10 > 2 * 10,'10 is less')

//  Write a warning message using console.warn()

console.warn('It is a warning message')

// Write an error message using console.error()

console.error('It is an error message')


// Exercises:Level 3

// 1. Check the speed difference among the following loops: while, for, for of, forEach

console.time('Foor of loop')
for(let {name} of countries) {
    console.log(name)
}
console.timeEnd('Foor of loop')

console.time('Regular foor loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i].name)
}
console.timeEnd('Regular foor loop')

console.time('forEach loop')
countries.forEach(({name}) => {
    console.log(name)
}
)
console.timeEnd('forEach loop')