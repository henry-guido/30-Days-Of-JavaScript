
//Exercises: Level 1
// 1. Declare a function fullName and it print out your full name.

// const fullName = (firstName, secondName, lastName) => console.log(`Hola! ${firstName} ${secondName} ${lastName}`);

// fullName('Henry','Gabriel','Guido Báez');


// const fullName = (...nombre) => console.log(`Hola! ${nombre[0]} ${nombre[1]} ${nombre[2]} ${nombre[3] ?? ''}`);

// fullName('Henry','Gabriel','Guido Báez');


// 2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

const fullName = (firstName, lastName) => {
    const secondName = 'Gabriel';
    console.log(`Hola! ${firstName} ${secondName} ${lastName}`)
};

fullName('Henry','Guido Báez');

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(num1,num2){
    return num1 + num2 
}

console.log( addNumbers(5,2));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle = (length, width) => length * width ;

console.log(areaOfRectangle(7,4));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

const perimeterOfRectangle = (length, width) => 2 * (length + width); 

console.log(perimeterOfRectangle(7,4)); 

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

const volumeOfRectPrism = (length,width,height) => length * width * height;

console.log(volumeOfRectPrism(15,10,5))

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle = (r) => Math.PI * r ** 2

console.log(areaOfCircle(19))

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const circumOfCircle = (r) => 2 * Math.PI * r ; 

console.log(circumOfCircle(25))


// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const density = (mass,volume) => mass/volume ; 

console.log(density(50,80)); 

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const speed = (distance, time) => distance / time ; 

console.log(speed(280,5)); 

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

const  findMax = (...arg) => Math.max(...arg); 

console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.


const showDateTime = () => {
    let date = new Date();
    let day =  date.getDay().toString().padStart(2,0);
    let month =  date.getMonth().toString().padStart(2,0);
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes().toString().padStart(2,0);
    return day + '/' + month + '/' + year + ' ' + hour + ':' + minute 
}

console.log(showDateTime())

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const capitalizeArray = (array) => {
    return array.map(x=> x[0].toUpperCase() + x.toString().slice(1) )
}

console.log(capitalizeArray(['henry','guido']));

// Write a function which takes any number of arguments and return the sum of the arguments

const sum = (...arg) => arg.reduce((a,b) => a+b);

console.log(sum(1, 2, 3)) // -> 6
console.log( sum(1, 2, 3, 4)) // -> 10

//  Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

const sumOfArrayItems = (array) =>{
    let allNumber =  array.every(x=> typeof(x)== 'number'); 
    return (allNumber) ? array.reduce((a,b)=> a+b) : 'Check that the entire array is number';
}

console.log(sumOfArrayItems([2,4,5,'s']))

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

const isEmpty = (arg) => (arg.length === 0); 

console.log(isEmpty([]))

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

const modifyArray = (array) => {
     return (array.length > 5) ?  (array.splice(4,1,array[4].toUpperCase()),array) : 'item not found'
     
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));


// Write a function called isPrime, which checks if a number is prime number.

const isPrime = number => {
    let res = 0;
    for (let i = 2; i < number ; i++) {
        if (number % i == 0){ 
            res++ ;
            break;
        } 
    }
    return (res==0 && number > 1) ? 'prime' :  'Not prime' 
}
console.log(isPrime())

//  Write a functions which checks if all items are unique in the array.

const unique = array =>{
    
    const find = (element,index,arr) =>  arr.indexOf(element) !== index ;
    return array.filter(find).length > 0 ? 'Item not unique' : 'Items unique'
}

console.log(unique([1,2,3,4,6,5]));

// Write a function which checks if all the items of the array are the same data type.

const sameType = array => array.every(x=> typeof x === typeof array[0])

console.log(sameType([1,2,3]))

//




