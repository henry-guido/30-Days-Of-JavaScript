//  Exercises: Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 1. Explain the difference between forEach, map, filter, and reduce.

// 2.  Define a callback function before you use it in forEach, map, filter or reduce.

const callback = (element) => {
    console.log(element);
}

// 3. Use forEach to console.log each country in the countries array.

countries.forEach(callback);

// 4. Use forEach to console.log each name in the names array.

names.forEach(callback);

// 5. Use forEach to console.log each number in the numbers array.

numbers.forEach(callback);

// 6. Use map to create a new array by changing each country to uppercase in the countries array.

console.log(countries.map(x => x.toUpperCase()));

// 7. Use map to create an array of countries length from countries array.

console.log(countries.map(country => country.length));

// 8. Use map to create a new array by changing each number to square in the numbers array

console.log(numbers.map(number => number ** 2));

// 9. Use map to change to each name to uppercase in the names array

console.log(names.map(name => name.toUpperCase()));

// 10. Use map to map the products array to its corresponding prices.

let prices = products.map(product => typeof product.price !== 'number' ? 0 : product.price)
console.log(prices)

// 11. Use filter to filter out countries containing land.

console.log(countries.filter(country => country.toLowerCase().includes('land')));

// 12. Use filter to filter out countries having six character

console.log(countries.filter(country => country.length === 6));

// 13. Use filter to filter out countries containing six letters and more in the country array.

console.log(countries.filter(country => country.length >= 6));

// 14. Use filter to filter out country start with 'E';

console.log(countries.filter(country => country.at(0) === 'E'));

// 15. Use filter to filter out only prices with values.

console.log(products.filter(product => typeof product.price === 'number'))

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = array => {
    return array.filter(x => typeof x === 'string')
}

console.log(getStringLists(['Hola', 2, 'mundo']))

// 17. Use reduce to sum all the numbers in the numbers array.

console.log(numbers.reduce((acc, act) => acc + act))

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

let cont = countries.reduce((a, b, i, arr) => {
    if (i == arr.length - 1) {
        return a + ` and ${b} are north European countries`
    }
    else {
        return a + ', ' + b
    }
}, '')

console.log(cont)

// 19. Explain the difference between some and every

// some: recorre cada elemento del arreglo y cuando la condicion evaluada se cumple retorna true y no sigue evaluando los otros elementros del arreglo de lo contario retorna false

// every: recorre cada elemento del arreglo y todos deben cumplir la condicion para que retorne true de lo contrario retorna false


// 20. Use some to check if some names' length greater than seven in names array 

console.log(names.some(name => name.length > 7))

// 21. Use every to check if all the countries contain the word land

console.log(countries.every(country => country.toLowerCase().includes('land')))

// 22. Explain the difference between find and findIndex.

// find: recorre cada elemento del arreglo y sí la condicion se cumple retorna el primer elemento encontrado como string de lo contrario retorna undefined

// findIndex: recorre cada elemento del arreglo y sí la condicion se cumple retorna el primer indice del elemento encontrado de lo contrario retorna -1

// 23. Use find to find the first country containing only six letters in the countries array

console.log(countries.find(country => country.length === 6))

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array

console.log(countries.findIndex(country => country.length === 6))

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

console.log(countries.findIndex(country => country === 'Norway'))

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

console.log(countries.findIndex(country => country === 'Russia'))

// Exercises: Level 2

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

let price = products.map(product => product.price)
    .filter(price => typeof price === 'number')
    .reduce((a, b) => a + b);

console.log(price);

// 2. Find the sum of price of products using only reduce reduce(callback))

console.log(
    products.reduce((a, b) => {
        if (typeof b.price === 'number')
            return a + b.price
        else return a
    }, 0)
)

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// import {countries2} from './countries.js'
// const categorizeCountries = () =>{
// const patterns=['land', 'ia', 'island','stan'];
// //console.log(countries2);
// return countries2.filter(country=> 
//     patterns.some(pattern=> country.name.toLowerCase().indexOf(pattern.toLowerCase())>-1 ))
// }

//console.table(categorizeCountries());

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
import { countries2 } from './countries.js'
let res = countries2.reduce((a, b) => {
    let firstLetter = Object.values(b)[0][0];
    let find = a.findIndex(x => Object.keys(x).toString() === firstLetter);
    if (find > -1) {
        a[find][firstLetter] += 1;
    }
    else {
        a.push({ [firstLetter]: 1 })
    }
    return a
}, [])
console.log(res)


// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

const getFirstTenCountries = (arr) => {
    for (let index = 0; index < 10; index++) {
        console.log(arr[index].name)
    }
}
getFirstTenCountries(countries2)

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
console.log('getLastTenCountries')
const getLastTenCountries = (arr) => {
    for (let index = arr.length - 11; index < arr.length - 1; index++) {
        console.log(index, arr[index].name)
    }
}
getLastTenCountries(countries2)

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

console.log(res.reduce((a, b) => {
    //console.log(b)
    if (Object.values(a)[0] < Object.values(b)[0]) {
        //console.log(b)
        return b
    }
    return a
}))

// Exercises: Level 3

// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population



const sortArrayString = (array, key) => {
    array.sort((a, b) => {
        return a[key].localeCompare(b[key]);
    })
    return [...array]
}

console.log('Sort by name', sortArrayString(countries2, 'name'));
console.log('Sort by capital', sortArrayString(countries2, 'capital'));

const sortArrayNumber = (array, key) => {
    array.sort((a, b) => {
        return a[key] - b[key];
    })
    return [...array]
}
console.log('Sort by population', sortArrayNumber(countries2, 'population'));


// 2.  Find the 10 most spoken languages:

const mostSpokenLanguages = (array, number) => {

    const flatLenguages = array.flatMap(country => country.languages)

    const groupLanguages = flatLenguages.reduce((a, b) => {
        let find = a.map(x => Object.values(x).at()).indexOf(b)
        if (find > -1) {
            a[find]['count'] += 1;
        }
        else {
            a.push({ country: b, count: 1 })
        }
        return a
    }, [])

    groupLanguages.sort((a, b) => b.count - a.count)
    return groupLanguages.slice(0, number)
}
console.log('mostSpokenLanguages', mostSpokenLanguages(countries2, 18))


// 3. Use countries_data.js file create a function which create the ten most populated countries

const mostPopulatedCountries = (array, top) => {
    const flatCountry = array.map(country => ({ country: country.name, population: country.population }))

    flatCountry.sort((a, b) => b.population - a.population)
    return flatCountry.slice(0, top)
}

console.log('mostPopulatedCountries', mostPopulatedCountries(countries2, 10))


// 4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
//const ages = [46,69,32,60,52,41]


const statistics = {
    count() {
        return ages.length;
    },
    sum() {
        return ages.reduce((a, b) => a + b);
    },
    min() {
        let min = ages.sort((a, b) => a - b);
        return min.at();
    },
    max() {
        let max = ages.sort((a, b) => b - a);
        return max.at();
    },
    range() {
        return this.max() - this.min();
    },
    mean() {
        //return  //`${this.sum()} / ${this.count()}`;
        return (this.sum() / this.count());
    },
    median() {
        let sortData = ages.sort((a, b) => a - b)
        let medianData = this.count() / 2
        return (this.count() % 2 !== 0)
            ? sortData.at(medianData)
            : (sortData.at(medianData) + sortData.at(medianData + 1)) / 2
    },
    mode() { //{'mode': 26, 'count': 5}
        let group = ages.reduce((a, b) => {
            let find = a.map(x => Object.values(x).at()).indexOf(b);
            (find > -1)
                ? a[find]['count'] += 1
                : a.push({ mode: b, count: 1 });
            return a
        }, [])
        return group.sort((a,b)=> b.count - a.count).at()
    },
    var() {
        let deviation = ages.map(age => Math.pow((age - this.mean()), 2));
        return deviation.reduce((a, b) => a + b) / (this.count());
    },
    std() {
        return Math.sqrt(this.var())
    },
    describe() {
        console.log('Count:', this.count()) // 25
        console.log('Sum: ', this.sum()) // 744
        console.log('Min: ', this.min()) // 24
        console.log('Max: ', this.max()) // 38
        console.log('Range: ', this.range())// 14
        console.log('Mean: ', this.mean().toFixed()) // 30
        console.log('Median: ', this.median()) // 29
        console.log('Mode: ', this.mode()) // {'mode': 26, 'count': 5}
        console.log('Variance: ', this.var().toFixed(1)) // 17.5
        console.log('Standard Deviation: ', this.std().toFixed(1)) // 4.2
    }
}


console.log(statistics.describe())













