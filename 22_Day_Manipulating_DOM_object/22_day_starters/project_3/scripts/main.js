console.log(asabenehChallenges2020)

const challengeYear = asabenehChallenges2020.challengeYear
document.querySelector('#title')
    .innerHTML = `${asabenehChallenges2020.challengeTitle} in <span class="year">${challengeYear}</span>`
const year = document.querySelector('.year')

document.querySelector('#subtitle')
    .textContent = asabenehChallenges2020.challengeSubtitle

const hour = document.createElement('div')
hour.id = 'hour'
document.querySelector('.wrapper').appendChild(hour)


//#region challenges div
const challengesList = document.createElement('div')
challengesList.className = 'wrapper-challenge'
const summary = (i) => asabenehChallenges2020['challenges'][i]['name'].replace('30 Days Of', '')
const details = (i) => asabenehChallenges2020['challenges'][i]['topics'].map(x => `<li>${x}</li>`).join('')
const challengeStatus = (i) => asabenehChallenges2020['challenges'][i]['status']
const backgroundColor = {Done:'#21BF73', Ongoing:'#FDDB3A', Coming:'#FD5E53'}

for (let i = 0; i < asabenehChallenges2020['challenges'].length; i++) {
    challengesList.innerHTML +=
        `<div class='row-list' style='background-color:${backgroundColor[challengeStatus(i)]}'>
        <p>${asabenehChallenges2020['challenges'][i]['name']}</p>
        <details>
            <summary>${summary(i)}</summary>
            <ul>${details(i)}</ul>
        </details>
        <p>${challengeStatus(i)}</p>
    </div>`
}
document.querySelector('.wrapper').appendChild(challengesList)
//#endregion challenges div
const name = document.createElement('h2')
const {firstName, lastName} = asabenehChallenges2020.author

name.innerHTML = firstName + ' ' + lastName 
name.style.textAlign = 'center'
name.style.fontSize = '2.5rem'
name.style.margin = '0'
const wrapper = document.querySelector('.wrapper')
wrapper.appendChild(name)

const icon = document.createElement('div')
icon.className = 'icon'
icon.innerHTML = 
`<a href="#" ><i class="fa-brands fa-linkedin fa-2xl" style="color: #000000;"></i></a>
<a href="#" ><i class="fa-brands fa-square-twitter fa-2xl" style="color: #000000;"></i></a>
<a href="#" ><i class="fa-brands fa-square-github fa-2xl" style="color: #0a0a0a;"></i></a>
`
wrapper.appendChild(icon)

const bio = document.createElement('p')
bio.className = 'bio'
bio.textContent = asabenehChallenges2020.author.bio
wrapper.appendChild(bio)

const author = document.createElement('div')
author.className = 'author'

const titles = document.createElement('div')
titles.className = 'titles'
titles.innerHTML = '<h3>Titles</h3>'
for (const title of asabenehChallenges2020.author.titles) {
    titles.innerHTML +=`<p>${title[0]} ${title[1]}</p>` 
}

const skills = document.createElement('div')
skills.className = 'skills'
skills.innerHTML = '<h3>Skills</h3>'
for (const title of asabenehChallenges2020.author.skills) {
    skills.innerHTML +=`<p><i class="fa-solid fa-square-check fa-lg" style="color: #02d44c;"></i>${title}</p>` 
}

const qualifications = document.createElement('div')
qualifications.className = 'qualifications'
qualifications.innerHTML ='<h3>Qualifications</h3>'
for (const qualification of asabenehChallenges2020.author.qualifications) {
    qualifications.innerHTML += `<p>${qualification}</p>`
}


author.appendChild(titles)
author.appendChild(skills)
author.appendChild(qualifications)
wrapper.appendChild(author)

const allQualifications = document.querySelectorAll('.qualifications > p')
allQualifications[0].innerHTML = '<span>📖</span>' + allQualifications[0].textContent
allQualifications[1].innerHTML = '<span><i class="fa-solid fa-user-graduate fa-xl"></i></span>' + allQualifications[1].textContent
allQualifications[2].innerHTML = '<span><i class="fa-solid fa-user-graduate fa-xl"></i></span>' + allQualifications[2].textContent
allQualifications[3].innerHTML = '<span><i class="fa-solid fa-user-graduate fa-xl"></i></span>' + allQualifications[3].textContent

const keywordwrapper = document.createElement('div')
keywordwrapper.className = 'keywords'
keywordwrapper.innerHTML = '<h3>Keywords</h3>'

const keywordsList = document.createElement('div')
keywordsList.className = 'keywordsList'
for (const keyword of asabenehChallenges2020.keywords) {
    const key = document.createElement('span') 
    key.style.backgroundColor = hexaColor()
    key.style.borderRadius = '1rem'
    key.style.padding = '.5rem 1rem .5rem .5rem'
    key.innerHTML = `# ${keyword}`
    keywordsList.appendChild(key)
}

keywordwrapper.appendChild(keywordsList)


wrapper.appendChild(keywordwrapper)

//#region funtions
function hexaColor() {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa
}

function getHour() {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date()
    const nameMonth = month.at(date.getMonth())
    const day = date.getDate()
    const year = date.getFullYear()
    const hour = date.getHours().toString().padStart(2, 0)
    const minute = date.getMinutes().toString().padStart(2, 0)
    const second = date.getSeconds().toString().padStart(2, 0)
    return `${nameMonth} ${day}, ${year} ${hour}:${minute}:${second}`
}

//#endregion funtions

hour.innerHTML = getHour()

setInterval(() => {
    year.style.color = hexaColor()
    hour.innerHTML = getHour()
    hour.style.backgroundColor = hexaColor()
}, 1000)