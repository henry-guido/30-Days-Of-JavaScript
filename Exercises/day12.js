

// Exercises: Level 1

// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

const salary = str.match(/\d+/g);
console.log("salary", salary)

let totalSalary = (Number.parseInt(salary[0]) + Number.parseInt(salary[2])) * 12 + Number.parseInt(salary[1]);
console.log("totalSalary", totalSalary)

//  2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']

points.sort((a, b) => a - b);

let distance = Math.abs(points.at()) + Math.abs(points.at(-1))

console.log(distance)


// 3. Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

const sa1 = 29;

const patternValid = /^[a-zA-Z$_]+\w+$/
///^[a-zA-Z,_]/; 
///.*-.*/  ; 

//    /[^0-9]| /   //A JavaScript variable name should not begin with a number.

let string = 'firstname';

console.log(patternValid.test(string));

// Exercises: Level 2

// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

let paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.';

let paragraphClean = paragraph.replace(/\./g, '');


const tenMostFrequentWords = (string, top = 0) => {
    let wordArray = string.split(' ');
    let wordSet = new Set(wordArray);
    let res = []
    for (let i of wordSet) {
        let wordCount = wordArray.filter(x => x === i).length;
        res = [...res, { word: i, count: wordCount }];
    }

    res.sort((a,b)=>b.count - a.count)

    return !top ? res.slice() : res.slice(0, top);
}

console.log(tenMostFrequentWords(paragraphClean))

// Exercises: Level 3

//  1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

let sentenceClean = sentence.replace(/[^\s\w]/g, '');

console.log("sentenceClean", sentenceClean)

console.log(tenMostFrequentWords(sentenceClean,3))
