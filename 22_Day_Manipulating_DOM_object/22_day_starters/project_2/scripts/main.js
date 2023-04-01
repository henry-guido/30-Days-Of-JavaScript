const countriesContainer = document.querySelector('#total-countries')
const countriesWrapper = document.querySelector('.countries-wrapper')

const totalCountry = countries.length


for (let i = 0; i < totalCountry; i++) {
    countriesWrapper.innerHTML += `<div>${countries[i]}</div>`
}


countriesContainer.textContent = `Total Number of countries: ${totalCountry}`