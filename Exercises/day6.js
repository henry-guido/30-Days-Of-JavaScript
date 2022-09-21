const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopias',
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
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

  // Exercises: Level 1

  // 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
let i = 0;
  do {
    i++;
    console.log(i);
  } while (i < 10);

  i = 0;
  while( i <10)
  {
    i++;
    console.log(i);
  }

  // 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

  do {
    console.log(i);
    i--;
  } while(i>=0);

  i=10;
  while (i>=0){
    console.log(i);
    i--;
  };


  // 3.Iterate 0 to n using for loop

  for (let i=0; i<=10;i++ ){
    console.log(i);
  }

  // 4.Write a loop that makes the following pattern using console.log():

//   #
//   ##
//   ###
//   ####
//   #####
//   ######
//   #######

  for(let i = 1; i<=7; i++){
        console.log('#'.repeat(i));
  }

  // 5.Use loop to print the following pattern:

//   0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

  for(let i = 0; i<=10 ; i++){
    console.log(`${i} x ${i} = ${i*i}`)
  }

  // 6. Using loop print the following pattern

//   i    i^2   i^3
//   0    0     0
//   1    1     1
//   2    4     8
//   3    9     27
//   4    16    64
//   5    25    125
//   6    36    216
//   7    49    343
//   8    64    512
//   9    81    729
//   10   100   1000

for (let i = 0; i <= 10; i++) {
    console.log(`${i}   ${i**2} ${i**3}`)
    
};

// 7.Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
    (i%2==0) && console.log(i);
}

// 8.Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
    (i%2==0) || console.log(i);
};


// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//The sum of all numbers from 0 to 100 is 5050.

let res = 0;
for (let i = 0; i <=100; i++) {
    res += i;
}
console.log(res)

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

let evenNumber = 0;
let oddNumber = 0;
for (let i = 0; i <=100; i++) {
    (i%2==0) ? evenNumber += i : oddNumber += i ;
}
console.log(evenNumber);
console.log(oddNumber);

// 12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//  [2550, 2500]

const array = new Array(2) ;
array.fill(0);

for (let i = 0; i <=100; i++) {
    (i%2==0) ? array[0] += i : array[1] += i ;
}
console.log(array);

// 13. Develop a small script which generate array of 5 random numbers

for (let i = 0; i < 5; i++) {
            
    console.log(Math.floor(Math.random()*1000))
    
};

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

let a = [];

while(a.length<=5){

    let RandomNumber = Math.floor(Math.random() * (33-126+1)+126);
    if (!a.includes(RandomNumber))a.push(RandomNumber);
}
console.log(a);

// 15. Develop a small script which generate a six characters random id:

let RandomChar = '' ; 

for (const i of a) {
    console.log(i)
    RandomChar = RandomChar + String.fromCharCode(i);
}

console.log(RandomChar);


//Exercises: Level 2

//  1. Develop a small script which generate any number of characters random id:

const GiveNumberRandom = (min,max) => {
   return Math.floor(Math.random() * (max - min + 1 ) + min );
}

console.log(GiveNumberRandom(0,20));

i = 0 ;
const number22 = GiveNumberRandom(5,15);
let result22 = '';
console.log(number22);

console.log(String.fromCharCode(GiveNumberRandom(33,126)));

while (i <= number22 ){
    result22 = result22 + String.fromCharCode(GiveNumberRandom(33,126));
    //console.log(String.fromCharCode(GiveNumberRandom(33,126)));
    console.log(i);
    i++;
}

console.log(result22);  


// 2. Write a script which generates a random hexadecimal number.
console.log(GiveNumberRandom(0,255).toString(16));  


const hexNumber = () => {
    return  GiveNumberRandom(0,255).toString(16).padStart(2,0);
}


let randomColor = `#${hexNumber()}${hexNumber()}${hexNumber()}`;

// let asd = document.getElementById("bg-clr").style.backgroundColor = randomColor;

console.log(`#${hexNumber()}${hexNumber()}${hexNumber()}`);                      

// 3. Write a script which generates a random rgb color number.



const colorRGB = () =>{
  return  GiveNumberRandom(0,255).toString().padStart(2,0);
}

console.log(`rgb(${colorRGB()},${colorRGB()},${colorRGB()})`)

// 4. Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let countriesUpper = countries.map(x=> x.toUpperCase());

console.log(countriesUpper);

// 5.Using the above countries array, create an array for countries length'.
//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

let countriesLength = countries.map(x=> x.length);
console.log("countriesLength", countriesLength)

// 6. Use the countries array to create the following array of arrays:
//  [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

let countriesArray = countries.map(x=> [x,x.slice(0,3).toUpperCase(),x.length]);
console.log("countriesArray", countriesArray)

// 7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

//let countriesLand = countries.filter(x=> x.includes('land'));
let countriesLand = countries.filter(x=> x.match('land'));
(countriesLand.length > 0) ? console.log("countriesLand", countriesLand) : console.log('All these countries are without land')

// 8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.


let countriesIA = countries.filter(x=> x.match(/ias$/));
(countriesIA.length > 0) ? console.log("countriesIA", countriesIA) : console.log('These are countries ends without ia')


// 9.Using the above countries array, find the country containing the biggest number of characters.

let countriesHigherLength = countries.reduce((a,b)=> {
   if(a.length > b.length)
   return a
   else return b
  })
console.log("countriesHigherLength", countriesHigherLength)

// 10. Using the above countries array, find the country containing only 5 characters.

let countries5length = countries.filter(x=> x.length == 5);
console.log("countries5length", countries5length)

// 11. Find the longest word in the webTechs array

let higherLength = webTechs.reduce((a,b) => a.length > b.length ? a : b)
console.log("higherLength", higherLength)

// 12. Use the webTechs array to create the following array of arrays:

let webTechsArray = webTechs.map(x=> [x.toUpperCase(),x.length]);
console.log("webTechsArray", webTechsArray)

// 13 . An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

for (let i of webTechs){
  console.log(i)
}

// 15 . This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruit = ['banana', 'orange', 'mango', 'lemon'];
let fruitReverse = []
for (let i = fruit.length-1 ; i>=0;i--){
  fruitReverse.push(fruit[i]);
  
}
console.log("fruitReverse", fruitReverse)

// 16.Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

let fullstackFlat =  fullStack.flat()

for (let i = 0; i < fullstackFlat.length; i++) {
    console.log(fullstackFlat[i])
}

// Exercises: Level 3

// 1. Copy countries array(Avoid mutation)

let countries2 = [...countries]; 

// 2.Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

countries2.sort();

console.log(countries);
console.log(countries2);

// 3.Sort the webTechs array and mernStack array

webTechs.sort();
mernStack.sort();

console.log(webTechs);
console.log(mernStack);

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array

let resultCountries = countries.filter(x=> x.includes('land'));
console.log("resultCountries", resultCountries)

// 5 Find the country containing the hightest number of characters in the countries array

let mayorLongitud = countries.reduce((a,b)=> a.length > b.length ? a : b ) ;
console.log("mayorLongitud", mayorLongitud)

// 6. Extract all the countries contain the word 'land' from the countries array and print it as array

/// 7. Extract all the countries containing only four characters from the countries array and print it as array

console.log(`${countries.filter(x=> x.length == 4 )}`) 

// 8. Extract all the countries containing two or more words from the countries array and print it as array

console.log(`${countries.filter(x=> x.length >= 2 )}`) 

// 9 Reverse the countries array and capitalize each country and stored it as an array

let countriesReverse = countries.reverse();
console.log("countriesReverse", countriesReverse)


