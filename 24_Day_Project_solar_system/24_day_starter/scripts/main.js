const planets = ['earth', 'jupiter', 'mars', 'mercury', 'moon', 'neptune', 'pluto', 'saturn', 'uranus', 'venus']

const gravitys = [9.8, 23.1, 3.71, 3.7, 1.60, 11, .7, 9, 8.7, 8.9]

const input = document.querySelector('input')
input.setAttribute('name', 'mass')

const description = document.querySelector('.description')
description.style.color = 'white'
description.style.backgroundColor = 'rgb(255,255,255,.2)'
description.style.width = '60%'
description.style.height = '40%'
description.style.margin = '12px 34px'
description.style.display = 'none'
description.style.textAlign = 'center'
description.style.flexDirection = 'column'
description.style.justifyContent = 'space-evenly'


const img = document.querySelector('.image')
const $img = document.querySelector('img')

const select = document.querySelector('select')
select.setAttribute('name', 'planet')
select.setAttribute('id', 'planet')

planets.forEach((e, i) => {
  const opt = document.createElement('option')
  opt.setAttribute('value', i)
  opt.innerHTML = e.toUpperCase()
  select.appendChild(opt)
})


const frm = document.querySelector('form')
  .addEventListener('submit', onFormSubmit)



function onFormSubmit(event) {
  event.preventDefault();
  let mass = ''
  let planet = ''
  const data = new FormData(event.target);

  mass = data.get('mass')
  planet = data.get('planet')

  if (!mass) {
    img.style.display = 'none'
    description.style.display = ''
    description.innerHTML = 'Mass is required'
    return false
  }

  if (planet === 'none') {
    img.style.display = 'none'
    description.style.display = ''
    description.innerHTML = 'You did not choose a planet yet'
    return false
  }

  description.style.display = ''
  description.innerHTML = `<p>The weight of the object on <span style='font-weight: bold'>${planets[planet].toUpperCase()}</span></p>`

  $img.setAttribute('src', `./images/${planets[planet]}.png`)

  description.style.display = ''
  const viewWeight = document.createElement('div')

  viewWeight.innerHTML = (mass * gravitys[planet]).toFixed() + ' N'
  viewWeight.setAttribute('class', 'circle')
  viewWeight.style.backgroundColor = 'rgba(255,255,255,0.2)'
  viewWeight.style.borderRadius = '50%'
  viewWeight.style.width = '100px'
  viewWeight.style.height = '100px'
  viewWeight.style.display = 'grid'
  viewWeight.style.placeItems = 'center'
  description.appendChild(viewWeight)

  //media query 
  var x = window.matchMedia("(max-width: 440px)")
  mediaQuery(x);

  x.addEventListener("change", function() {
    mediaQuery(x);
  });
  function mediaQuery(x) {
    if (x.matches) { // If media query matches
      viewWeight.style.width = '50px'
      viewWeight.style.height = '50px'
    }
  }
}

