let numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
console.log('Numbers:',numbers);
console.log('Number of numbers:', numbers.length);
console.log('Number of numbers:', numbers['length']);

let js = 'JavaScript';
const charsInJavaScript = js.split('');
console.log( charsInJavaScript);


let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies);

let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words);

//let arr = Array();

//onst eightXvalues = Array(8).fill('X'); 
//console.log(eightXvalues);

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];

console.log(firstList.concat(secondList));

console.log(js.length);

 numbers = [1, 2, 3, 4, 5];

 console.log(numbers.indexOf(2));
 console.log(numbers.findIndex(x=> x == 2));

  numbers = [1, 2, 3, 4, 5, 3, 1, 2];

  console.log(numbers.lastIndexOf(3));
  console.log(numbers.lastIndexOf(2));

console.log(numbers.includes(3));

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(js));

console.log(numbers.toString());
console.log(numbers.join());;

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

console.log(names.join('-'));

numbers = [1, 2, 3, 4, 5, 6];
let arr2 = [7,8,9,10];
  numbers.splice(6, 0, ...arr2);
  console.log(numbers);

   arr  = ['item1', 'item2','item3']
  arr.push('new item')
  console.log(arr);

  numbers.pop();
  console.log(numbers);

  numbers.shift();
  console.log(numbers);

  numbers.unshift(1);
  console.log(numbers);

  console.log( numbers.reverse());
  console.log(numbers);

numbers.sort();
console.log(numbers);

const arrayOfArray =  [[1, 2, 3], [[1,2], 3, 4]]
console.log(arrayOfArray.flat(2)) ;

/* Excercise */

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

// 1. Declare an empty array;
let array = new Array();
console.log(array);

//2. Declare an array with more than 5 number of elements
let array2 = new Array(7);
console.log(array2);

// 3.Find the length of your array
console.log(array2.length);

// 4. Get the first item, the middle item and the last item of the array
console.log('first item is: ',webTechs[0]);
console.log('last item is: ',webTechs[webTechs.length-1]);
let middle = Math.ceil((webTechs.length-1)/2);
console.log('middle item is: ',webTechs[middle]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [1,2,[3,4],{nombre:'Henry',edad:28},'Hola Mundo',true,3.2];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ['Facebook','Google','Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()

console.log(itCompanies);

// 8. Print the number of companies in the array

console.log(itCompanies.length);

//Print the first company, middle and last company

console.log('first company is: ', itCompanies[0]);
middle = Math.ceil(itCompanies.length-1) /2;
console.log(middle);
console.log('middle company is: ', itCompanies[middle]);
console.log('last company is: ', itCompanies[itCompanies.length-1]);

itCompanies.forEach(element => {
  console.log(element);
});

array.forEach(element => {
  
});

// 11.Change each company name to uppercase one by one and print them out

itCompanies.map(x=> console.log( x.toUpperCase()));

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.


console.log(`${itCompanies.slice(0,itCompanies.length-1)} \
and ${itCompanies[itCompanies.length-1]} are big IT companies`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let nameCompany = 'Apple';
let index = itCompanies.indexOf(nameCompany);
(index) >=0 ? console.log(itCompanies[index]) : console.log('Not found');


// 14. Filter out companies which have more than one 'o' without the filter method

//using Filter
let filter =  itCompanies.filter(x=> x.match(/.*o.*o/i));
console.log(filter);

//using Map
itCompanies.map(x=> {
  if (x.match(/.*o.*o/i))
  console.log(x) });

  // 15. Sort the array using sort() method

  itCompanies.sort();
  console.log(itCompanies);

  // 16. Reverse the array using reverse() method

  itCompanies.reverse();

console.log(itCompanies);

// 17. Slice out the first 3 companies from the array

console.log(itCompanies.slice(0,3));

// 18. Slice out the last 3 companies from the array

let last3Company = itCompanies.slice(itCompanies.length-3,itCompanies.length);
console.log(last3Company);

// 19. Slice out the middle IT company or companies from the array

let middleCompany = itCompanies[Math.ceil((itCompanies.length-1)/2)];
console.log(middleCompany);

// 20. Remove the first IT company from the array

itCompanies.shift();
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
console.log(Math.ceil((itCompanies.length-1)/2))
itCompanies.splice(Math.ceil((itCompanies.length-1)/2)-1,1);
console.log(itCompanies);

// 22. Remove the last IT company from the array

itCompanies.pop();
console.log(itCompanies);

// 23. Remove all IT companies

itCompanies.splice(0,itCompanies.length)
console.log(itCompanies);

