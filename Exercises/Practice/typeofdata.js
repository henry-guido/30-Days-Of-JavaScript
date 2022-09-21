
/*****************************  Tipo de datos primitivos**************************/

// 1 - los datos primitivos no son modificables o mutable

let firstName = 'Henry';
firstName[0] = 'G';

const persona = {

    nombre:'henry',
    edad: 28,

}

let decimal = 2.6; 

console.log(persona.edad)

console.log( Math.round(decimal))

console.log(firstName);

// 2- los tipos de datos primitivos se pueden comparar

let secondName = 'Gabriel';
let segundoNombre = 'Gabriel';

console.log(secondName == segundoNombre ) ;


let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10

let longString = 'Lorem ipsum dolor sit amet consectetur\
 adipisicing elit. Neque voluptatem asperiores nobis dolore soluta!\
 Cum fuga nam aut laborum quaerat ipsum modi? Quis, omnis itaque\
 officiis voluptatibus cum repudiandae aliquam.'

console.log(longString);

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
 

console.log("🚀 ~ file: typeofdata.js ~ line 59 ~ longString", longString.length)


console.log( longString.substring(0,2))

let string2 = '30 Days Of JavaScript'

console.log(string2.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string2.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]


console.log(string2.replace(/\s/g,''))     // Changes to an array -> ["30 Days Of JavaScript"]

var str = '  A B  C   D EF ';
console.log(str.replace(/\s/g, '#'));  // ##A#B##C###D#EF#
console.log(str.replace(/\s+/g, '#')); // #A#B#C#D#EF#

let string3 = '   30 Days Of JavaScript   '

console.log(string3)
console.log(string3.trim(' '));

let firstName2 = ' Asabeneh ';

console.log(firstName2)
console.log(firstName2.trim())  // still removes spaces at the beginning and the end of the string
 
console.log( string2[0]);
console.log(string2.charCodeAt(0))

let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false

let string4 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string4.search('If'))

let string5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string5.match('If'))

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]