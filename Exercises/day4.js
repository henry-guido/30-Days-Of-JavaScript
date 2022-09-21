//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/* let edad = prompt('Enter your age: ');
let message = '' */

/* message = edad >= 18 ?  'Yor are old enough to drive' :  `your are left with ${18-edad} years to drive`;
console.log(message); */

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/* 
if (edad > 30 ) console.log(`You are ${25+edad} year older than me.`)
else if (edad < 30) console.log(`I am ${25-edad} year older than you`)
else console.log('we are the same age'); */

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
/* 
let a = prompt('Ingrese el valor de a');
let b = prompt('Ingrese el valor de b');

if (a > b) console.log(`a:${a} es mayor que b:${b}`);
else console.log(`b:${b} es mayor que a:${a}`);

(a > b) ? console.log(`a:${a} es mayor que b:${b}`) : console.log(`b:${b} es mayor que a:${a}`); */

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

/* let numero = prompt('Ingrese un numero'); 

let message = ( numero % 2 == 0 ) ? `${numero} is an even number` : `${numero} is an odd number`; 

console.log(message);
 */

//Exercises: Level 2
/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */
/* 
let grade = prompt('Enter your grades');
let message = 'grades invalid';
switch (true) {
    case grade >= 90 && grade <= 100:
        message = 'A';
        break;
    case grade >= 70 && grade <= 89:
        message = 'B';
        break;
    case grade >= 60 && grade <= 69:
        message = 'C';
        break;
    case grade >= 50 && grade <= 59:
        message = 'D';
        break;
    case grade >= 0 && grade <= 49:
        message = 'F';
        break;
    default:
        break;
}
console.log(message); */

//Check if a day is weekend day or a working day. Your script will take day as an input.
/* 
let day = prompt('What is the day  today?');

let array = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

 let dayWeek = array.indexOf(day.toLowerCase()); 

 console.log(dayWeek);
 
 if (dayWeek >=1 && dayWeek<=5) console.log(`${array[dayWeek]} is a working day`);
 else if (dayWeek == 0 || dayWeek == 6) console.log(`${array[dayWeek]} is a weekend`);
 else console.log('Enter a day of week'); */

//  Write a program which tells the number of days in a month.

 let month = prompt('Enter a month');

    let array = ['January','February','March','April','May','June','July','August','September','October','November','December']

    let monthNumber = array.findIndex(x=> x.toLowerCase() == month.toLowerCase());
    
    let date = new Date();

let lastDay = new Date(2024, monthNumber + 1,0);

monthNumber == -1 
? console.log('enter a valid month')
: console.log(`${array[monthNumber]} has ${lastDay.getDate()} days.`);
 
