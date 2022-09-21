
// Exercises:Level 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1. create an empty set

const newSet = new Set();
console.log(newSet);

// 2. Create a set containing 0 to 10 using loop

for (let i = 0; i <= 10; i++) {
    newSet.add(i);
}

console.log(newSet);

// 3.Remove an element from a set

newSet.delete(2);

console.log(newSet);

// 4. Clear a set

newSet.clear();

console.log(newSet);

// 5. Create a set of 5 string elements from array

const array = ['apple', 'orange', 'pineapple', 'pear', 'tomato']

array.forEach(element => {
    newSet.add(element)
});

console.log(newSet);

// 6. Create a map of countries and number of characters of a country

const countriesMap = new Map();
countries.forEach(element => {
    countriesMap.set(element, element.replace(' ', '').length)
});
console.log(countriesMap)


// Exercises:Level 2

// 1. Find a union b

const c = [...a, ...b];
let C = new Set(c);
console.log("C", C)


// 2. Find a intersection b

let B = new Set(b);

let inter = a.filter(x => B.has(x));
console.log(inter)


// 3. Find a difference with b

let diff = a.filter(x => !B.has(x));
console.log("diff", diff)

// Exercises:Level 3

// 1. How many languages are there in the countries object file.

import { countries2 } from './countries.js'

const languages = countries2.flatMap(X => X.languages); 

const languagesSet = new Set(languages); 

console.log('Count Languages',languagesSet.size)

// 2. Use the countries data to find the 10 most spoken languages:

const mostSpokenLanguages = []

for(let i of languagesSet) {
    let count =  languages.filter(x=> x === i).length;
    mostSpokenLanguages.push({[i]: count})
}


const topMSL = (array,top) =>{
    array.sort((a,b)=> Object.values(b) - Object.values(a))
    return array.slice(0,top);
}

console.log(topMSL(mostSpokenLanguages,10))

console.log(topMSL(mostSpokenLanguages,3))






