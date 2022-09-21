var challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,2));
var length = challenge.length;
console.log(challenge.slice(2,length));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));

console.log(challenge.replace('JavaScript','Phyton'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(challenge.search('J')));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log(challenge.search('a'));

var seventeen = 'You cannot end a sentence with because because because is a conjunction';

console.log(seventeen.indexOf('because'));
console.log(seventeen.lastIndexOf('because'));
console.log(seventeen.search('because'));
var trim= ' 30 Days Of JavaScript '
console.log(trim);
console.log( trim.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match(/\a+/g));
console.log('30 Days Of '.concat('JavaScript'));
console.log(challenge.repeat(2));

let cita = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.';
console.log(cita);
const ciudad = 'Managua';
console.log("🚀 ~ file: day2 ~ line 39 ~ ciudad", ciudad)

var teresa = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"';
console.log("🚀 ~ file: day2 ~ line 42 ~ teresa", teresa)

console.log(typeof '10');
console.log(typeof 10);
console.log(typeof 9.8);

function random(min,max){
let randomNumber = Math.random() * (max-min + 1) + min;
return Math.floor(randomNumber) //let numberRandomFlour = Math.floor(numberRandom);
}
console.log(random(0,255))

const slice = 'You cannot end a sentence with because because because is a conjunction';
console.log(slice.indexOf('because'))
console.log(slice.lastIndexOf('because'))
console.log(slice.substr(0,30).concat(slice.substr(47+7,50)));

let string = 'JavaScript'
console.log(string.substr(4,6))  ;

var count = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log( count.match(/love/g).length);

var mat = 'You cannot end a sentence with because because because is a conjunction'

console.log(mat.match(/because/g).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

console.log(sentence.replace(/[^\w\s]|_/g,''));

var salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

var sumtotal = salary.match(/\d+/g).reduce((a,b)=> parseInt(a)+ parseInt(b));


const var2 = 'scarleth' ;
console.log(var2[7]);
console.log(var2.substring(2,6))
console.log(var2.length);


var lastIndex = var2.length-1;
console.log(var2.charAt(lastIndex))