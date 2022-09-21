let isLightOn = true
//let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
let falseValue2 = null   // false

truValue
falseValue2

const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37  

console.log(
    `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
  )

  console.log(3 !== '3')

  console.log(typeof null)         // false, not equal
  console.log({} == false)    
  console.log(typeof NaN)   
  
  if ({})
  {
    console.log('Undefined')
  }
  else 
  {
    console.log("No Indefiniado")
  }

  let count = 0
console.log(--count)        // 1
console.log(count)  

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')


  let variable  = NaN

  variable 
  ? console.log ('verdadero')
  :  console.log('Falso');


  let firstName =  'Henry';
  let lastName = 'Gabriel'; 
  let Country = 'Nicaragua';
  let city = 'Managua';
  let age = 28; 
  let isMarried2 = false; 
  let year = 2022; 

  console.log(typeof '10');
  console.log(parseInt('9.8') == 10);
  console.log(parseInt('9.8'));
  console.log(Math.ceil(9.8));

 (NaN) 
 ? console.log('True') 
 : console.log('False');

 (undefined) 
 ? console.log('True') 
 : console.log('False');

 (null) 
 ? console.log('True') 
 : console.log('False');

 ({}) 
 ? console.log('True') 
 : console.log('False');

 ([]) 
 ? console.log('True') 
 : console.log('False');

 ('Hola') 
 ? console.log('True') 
 : console.log('False')


 console.log(4 > 3) //true
 console.log( 4 >= 3 ); // false
 console.log( 4 < 3  );//false
 console.log( 4 <= 3 ); //false
 console.log( 4 == 4  ); //true
 console.log( 4 ===  4 ) //true
 console.log( 4 !=  4 ) //false
 console.log( 4 !== 4 )//false
 console.log( 4 != '4') //false
 console.log( 4 == '4') //true
 console.log( 4 === '4') //false


 console.log( 4 > 3 && 10 < 12 )   //true
 console.log( 4 > 3 && 10 > 12 )   //true
 console.log( 4 > 3 || 10 < 12 )   //true
 console.log( 4 > 3 || 10 > 12 )   //true
console.log( !(4 > 3) )    //false
console.log( !(4 > 3 && 10 < 12)) //false
console.log( !(4 > 3 && 10 < 12)) //false
console.log( !(4 < 3) )   //true
console.log( !(false) )   //true
console.log( !(4 > 3 && 10 > 12) )//true
console.log( !(4 === '4') )//true

//What is the year today?
let date = new Date();
console.log(new Date().getFullYear());
//What is the month today as a number?
console.log(new Date().getMonth()+1);
//What is the date today?
console.log(new Date());
//What is the day today as a number?
console.log(new Date().getDay());
//What is the hours now?
console.log(date.getHours())
//What is the minutes now?
console.log(date.getMinutes())
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime());
console.log(Date.now() );

const edadDefault = 1970;
let edad = 100;

console.log(new Date(`${edadDefault+100}-01-01`).getTime())


let dia = String(date.getDate()).padStart(2,'0');
let mes = String(date.getMonth()+1).padStart(2,'0');
let año = date.getFullYear();
let hora = String(date.getHours()).padStart(2,'0');
let minutos = String(date.getMinutes()).padStart(2,'0');


//YYYY-MM-DD HH:mm
console.log(`${año}-${mes}-${dia} ${hora}:${minutos}`)
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm


var date2 = new Date("2012-01-18T16:03");

console.log( (date2.getMinutes()<10?'0':'') + date2.getMinutes() );





