/*Suma todos los números primos
Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.*/

function sumPrimes(num) {
    if(num < 2) return 0 
    const arr = []
    for(let i = 2; i <= num; i++){
      if(i % 1 === 0 && i % i === 0 && arr.every(x=> i % x !== 0)){
        arr.push(i)
      }
    }
    return arr.reduce((a,b)=> a+b)
  }
  
  console.log(sumPrimes(10));