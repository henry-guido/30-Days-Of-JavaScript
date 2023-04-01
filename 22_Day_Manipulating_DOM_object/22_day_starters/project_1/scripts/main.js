


const container = document.querySelector('.wrapper')



function primeNumber(num){
    const primeNumbers = []
    for(let i = 2; i <= num; i++){
        if(i % i === 0 && i % 1 === 0 && primeNumbers.every((item) => i % item !== 0
        )){
            primeNumbers.push(i)
        }
    }
    return primeNumbers.includes(num)
}

for(let i = 0; i <= 101; i++){
    if(primeNumber(i)){
        container.innerHTML += `<div class="box prime">${i}</div>`
    }
    else if (i % 2 === 0){
        container.innerHTML += `<div class="box even">${i}</div>`
    }
    else{
        container.innerHTML += `<div class="box odd">${i}</div>`
    }
}