import { countries } from "../../design/data/countries_data.js";

console.log(countries)

const input = document.createElement('input')
input.style.border = '2px solid #5EBD7C'
input.style.height = '2rem'
input.placeholder = 'Generate more numbers...'

const wrapperHeader = document.createElement('div')
wrapperHeader.className = 'wrapperHeader'

const label = document.createElement('label')
const inputdiv = document.createElement('div')
inputdiv.className = 'inputdiv'
inputdiv.appendChild(label)
inputdiv.appendChild(input)


const button = document.createElement('button')
button.textContent = 'Generate numbers'
button.style.backgroundColor = '#5EBD7C'
button.style.border = '2px solid #5EBD7C'
button.style.color = '#ffff'
button.style.height = '2rem'

wrapperHeader.appendChild(inputdiv)
wrapperHeader.appendChild(button)


const container = document.createElement('div')
container.className = 'numbers-container'


generateNumbers(50)

button.addEventListener('click', () => {
    const number = Number(input.value)
    console.log(number)
    if ( input.value === ''){
        label.style.color = 'red'
        label.style.marginBottom = '3px'
        return label.innerHTML = 'Enter number value on the input field to generate numbers'
    }
    else if (isNaN(number)){
        label.style.color = 'red'
        label.style.marginBottom = '3px'
        return label.innerHTML = 'Input value must be a number'
    }
    
    container.innerHTML = ''
    generateNumbers(number)

})

function primeNumber(num) {
    const primeNumbers = []
    for (let i = 2; i <= num; i++) {
        if (i % i === 0 && i % 1 === 0 && primeNumbers.every((item) => i % item !== 0
        )) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers.includes(num)
}

function generateNumbers(number) {
    for (let i = 0; i <= number; i++) {
        if (primeNumber(i)) {
            container.innerHTML += `<div class="box prime">${i}</div>`
        }
        else if (i % 2 === 0) {
            container.innerHTML += `<div class="box even">${i}</div>`
        }
        else {
            container.innerHTML += `<div class="box odd">${i}</div>`
        }
    }
}

const wrapper = document.querySelector('.wrapper')


wrapper.appendChild(wrapperHeader)
wrapper.appendChild(container)

