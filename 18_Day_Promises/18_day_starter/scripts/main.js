// Exercises

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises: Level 1


// 1.0 Read the countries API using fetch and print the name of country, capital, languages, population and area.

// fetch(countriesAPI)
// .then(response=> response.json())
// .then(data=>
//   data.forEach(x=> console.log(
//   {'country': x.name,
//    'capital': x.capital,
//    'languages': x.languages[0].name,
//    'population':x.population,
//    'area': x.area
//   }))
//       )
// .catch(error=> console.log(error.toString()))

// Exercises: Level 2

// 1. Print out all the cat names in to catNames variable.

// const catNames = []
// fetch(catsAPI)
//     .then(response => response.json())
//     .then(data => data.forEach(x => catNames.push(x.name)))
//     .catch(error => console.log(error))

// console.log('catNames',catNames)


// Exercises: Level 3

// 1. Read the cats api and find the average weight of cat in metric unit.

// const url = 'https://api.thecatapi.com/v1/breeds'
// fetch(url)
//     .then(response => response.json())
//     .then(data => addData(data))
//     .catch(error => console.error(error))

// const addData = (obj) => {
//     const weightArr = obj.map(x => x.weight.metric)

//     let weightSet = new Set(weightArr)
//     for (const iterator of weightSet) {
//         const count = weightArr.filter(x => x == iterator).length
//         console.log({ [iterator]: count })
//     }
// }






// 2. Read the countries api and find out the 10 largest countries

fetch(countriesAPI)
.then(response=> response.json())
.then(data=> getLargestCountry(data))
.catch(error=> console.error(error))

const getLargestCountry = (obj) => {
    const countriesArea =  obj.map(x=> ({country: x.name, area : x.area}))
    countriesArea.sort((a,b)=> b.area - a.area)
    console.log(countriesArea.slice(0,10))
    
}

// 3. Read the countries api and count total number of languages in the world used as officials.



fetch(countriesAPI)
.then(response=> response.json())
.then(data=> getLanguageCountry(data))
.catch(error=> console.error(error))

const getLanguageCountry = (obj) => {
    const totalLang = []
    const languages =  obj.flatMap(x=> x.languages.map(language=> language.name))
    let languagesSet = new Set(languages)
    for(let i of languagesSet) {
        let count = languages.filter(x=> x === i).length
        totalLang.push({[i]:count})
    }
    console.log(totalLang.sort((a,b)=> Object.values(b)-Object.values(a)))
}





