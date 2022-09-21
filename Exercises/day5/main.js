// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// console.log(countries);
// console.log(webTechs);

/// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

text = text.replace(/\./g, '');
text = text.split(' ');
console.log(text);
console.log(text.length);

// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 3.1 add 'Meat' in the beginning of your shopping cart if it has not been already added

shoppingCart.unshift('Meat');
console.log(shoppingCart);


// 3.2 add Sugar at the end of you shopping cart if it has not been already added 

shoppingCart.push('Sugar');
console.log(shoppingCart);

// 3.3 remove 'Honey' if you are allergic to honey

let index = shoppingCart.indexOf('Honey');
shoppingCart.splice(index, 1);
console.log(shoppingCart);


// 3.4 modify Tea to 'Green Tea'

index = shoppingCart.indexOf('Tea');;
shoppingCart[index] = 'Green Tea';
console.log(shoppingCart);


// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// let search = countries.indexOf('Ethiopia');
// console.log("🚀 ~ file: main.js ~ line 47 ~ search", search)
// console.log(countries);
// (search >= 0) ? console.log(countries[search].toUpperCase()) : countries.push('Ethiopia'); 

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// let search = webTechs.indexOf('Sass');
// (search >= 0)
//     ? console.log('Sass is a CSS preprocess')
//     : (console.log('Ingreso Saass'),
//         webTechs.push('Sass'),
//         console.log(webTechs));

// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

let fullStack = frontEnd.concat(backEnd);
console.log( fullStack)


// Exercise: Level 3

// 1.0 The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1.1 Sort the array and find the min and max age

ages.sort();

let min = ages[0]; 
console.log("🚀 ~ file: main.js ~ line 80 ~ min", min)
let max = ages[ages.length-1];
console.log("🚀 ~ file: main.js ~ line 82 ~ max", max)

// 1.2 Find the median age(one middle item or two middle items divided by two)

let ageSum = ages.reduce((a,b)=> a + b ,0);
console.log("🚀 ~ file: main.js ~ line 87 ~ ageMedian", ageSum / 2)

// 1.3 Find the average age(all items divided by number of items)

let average = ageSum / ages.length ;
console.log("🚀 ~ file: main.js ~ line 92 ~ average", average)

// 1.4 Find the range of the ages(max minus min)

const range = {
    '1-9': 0,
    '10-20': 0,
    '21-30':0,
    '31-40':0,
    '40-50':0,
    '51-60':0,
};

for (var i in range){
    const ageRange = i.split('-');
    range[i] =  ages.filter(x=> x >= ageRange[0] && x<= ageRange[1]).length;
}

console.log(range);



// 3. Slice the first ten countries from the countries array

console.log(countries.slice(0,10));

// 4. Find the middle country(ies) in the countries array

let middle = countries.length / 2;
console.log("🚀 ~ file: main.js ~ line 121 ~ middle", middle)

// 5. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

let countryOne;
let countryTwo;

if (countries.length % 2 == 0 )
{
     countryOne = countries.slice(0,middle);
     countryTwo = countries.slice(middle,countries.length);

}
else
{
     countryOne = countries.slice(0,middle+1);;
     countryTwo = countries.slice(middle+1,countries.length);
}

console.log("🚀 ~ file: main.js ~ line 134 ~ countryOne", countryOne);
console.log("🚀 ~ file: main.js ~ line 134 ~ countryTwo", countryTwo);
conso






