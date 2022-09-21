// // Exercises: Level 1
//  // 1. Create an empty object called dog

// const dog = {};

// // 2. Print the the dog object on the console

// console.log(dog);

// // 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

// dog.name = 'ponky'; 
// dog.color = 'brown';
// dog.age = 2 ; 
// dog.bark = function(){
//     return 'woof woof';
// };


// // 4. Get name, legs, color, age and bark value from the dog object

// console.log(dog.name);
// console.log(dog.color);
// console.log(dog.age);
// console.log(dog.bark());

// // 5. Set new properties the dog object: breed, getDogInfo

// dog.breed = 'Pastor Aleman'; 
// dog.getDogInfo = function(){
//     return `name: ${this.name} age: ${this.age} color: ${this.color} breed: ${this.breed}`;
// }

// console.log(dog.getDogInfo())


// Exercises: Level 2

// 1. Find the person who has many skills in the users object.

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//   const array = [...users]; 
// console.log(array)
//   const userMostSkill = (arr) =>{
//   return arr.reduce((a,b)=>{
//     console.log(a)
//     console.log(b)
//     if(a.skills.length > b.skills.length )
//         return  a.email
//     else return b.email
//   })
// }

let array = Object.keys(users).map(x=> ({ name:x, skillCount:users[x].skills.length}));
console.log("result", array)

console.log(typeof array[0])
 let result = array.reduce((a,b)=> {
  console.log(a)
  return (a.skillCount> b.skillCount) ? a : b
 },{})
console.log("result", result.name);

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
let countLogged = 0;
let countPoint = 0;
 for (const i in users) {
  if (users[i].isLoggedIn === true) countLogged++
  if (users[i].points >= 50 ) countPoint++
}
console.log(countLogged)
console.log(countPoint)

// 3. Find people who are MERN stack developer from the users object

let mern = ['mongodb','express','react','node']; 
console.log( mern.includes('react') )
for (const i in users) {
  let mern2 = mern.every(x=> users[i].skills.map(x=> x.toLowerCase()).indexOf(x.toLowerCase())>-1)
  if (mern2) console.log(i)
}

// 4. Set your name in the users object without modifying the original users object


const copyUser = Object.assign({
  Henry:{email:'hguido@gmail.com',
         skills:['SQL','PowerBI','JavaScript','React','C#','HTML','CSS'],
         age:28,
         isLoggedIn: true,
         points:50
}},users)
console.log(copyUser);

// 5. Get all keys or properties of users object

console.log(Object.keys(users))

// 6. Get all the values of users object

console.log(Object.values(users))

// 7. Use the countries object to print a country name, capital, populations and languages.


// Exercises: Level 3

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: '',
  lastName: '',
  incomes: {incomes: 0, description:''},
  expenses: {expenses:0,description:''},
  totalIncome: function(){},
  totalExpense: function(){},
  accountInfo: function(){},
  addIncome: function(){},
  addExpense: function(){},
  accountBalance: function(){}
}

// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    const users2 = [
      {
          _id: 'ab12ex',
          username: 'Alex',
          email: 'alex@alex.com',
          password: '123123',
          createdAt:'08/01/2020 9:00 AM',
          isLoggedIn: false
      },
      {
          _id: 'fg12cy',
          username: 'Asab',
          email: 'asab@asab.com',
          password: '123456',
          createdAt:'08/01/2020 9:30 AM',
          isLoggedIn: true
      },
      {
          _id: 'zwf8md',
          username: 'Brook',
          email: 'brook@brook.com',
          password: '123111',
          createdAt:'08/01/2020 9:45 AM',
          isLoggedIn: true
      },
      {
          _id: 'eefamr',
          username: 'Martha',
          email: 'martha@martha.com',
          password: '123222',
          createdAt:'08/01/2020 9:50 AM',
          isLoggedIn: false
      },
      {
          _id: 'ghderc',
          username: 'Thomas',
          email: 'thomas@thomas.com',
          password: '123333',
          createdAt:'08/01/2020 10:00 AM',
          isLoggedIn: false
      }
      ];
  
      const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
 //Imagine you are getting the above users collection from a MongoDB database.
 // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account. 
 // b. Create a function called signIn which allows user to sign in to the application

 // results a
const signUp = (obj) =>{
 let validateUser = users2.map(x=> x.username.toLowerCase()).includes(obj.username.toLowerCase());
  // if (validateUser){ 
  //   return 'The username has already an account'} 
  //   else {
  //    users2.push(obj);
  //    return 'User created'}
  return (validateUser) 
    ? 'The username has already an account'
    : (users2.push(obj) , 'User created')
}

const newUser = {
  _id: 'ghderc',
username: 'Thomas2',
email: 'thomas@thomas.com',
password: '123333',
createdAt:'08/01/2020 10:00 AM',
isLoggedIn: false}
console.log(signUp(newUser))
console.log(users2)

// results b


const signIn = (username,password) => {
    let validate = (users2.some(x=> x.username == username && x.password == password)); 
    return (validate) ? 'Welcome username!!' : 'Invalid Credential'
}

console.log(signIn('Thomas2',123333))

// 3. The products array has three elements and each of them has six properties. 

//a. Create a function called rateProduct which rates the product 

const rateProduct = (product) =>{
    return products.filter(x=> x.name == product)[0].price
}

console.log(rateProduct('TV'))

//b. Create a function called averageRating which calculate the average rating of a product


const averageRating = (product) =>{
  let rating =  products.filter(x=> x.name == product)[0].ratings
  return (rating.length==0) ? 0 : rating.reduce((a,b)=> (a.rate+b.rate)/rating.length)
}
console.log(averageRating('mobile phone'))


