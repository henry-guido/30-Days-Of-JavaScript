
//font family
document.body.style.fontFamily = 'system-ui'

//estilo del contenedor
const wrapper = document.querySelector('.wrapper')
wrapper.style.display = 'grid'
wrapper.style.justifyContent = 'center'

//h1 separacion del año y estilo 
const h1 = document.querySelector('h1')
const textH1 = h1.textContent.slice(0,-4)
const numberH1 = h1.textContent.slice(-4)
h1.innerHTML = `${textH1}<span>${numberH1}</span>`
h1.style.margin = '0'

// estilo del año
const year = document.getElementsByTagName("span")[0]
year.style.fontSize = '52px'
year.style.color = 'blue'
setInterval(() => {
  year.style.color = hexaColor()
}, 1000);

//subtitulo
const h2 = document.getElementsByTagName('h2')[0]
h2.style.textAlign = 'center'
h2.style.marginTop = '22px'
h2.style.textDecoration = 'underline'
h2.style.fontWeight = 'normal'

//ul
const ul = document.getElementsByTagName('ul')[0]


// stilo de las lista 
const li = document.getElementsByTagName('li')
document.querySelectorAll('ul')[0].style.listStyle = "none"
document.querySelectorAll('li')[0].style.backgroundColor = 'green'
document.querySelectorAll('li')[1].style.backgroundColor = 'gold'

for(let i = 0; i < li.length; i++){
  
  if (i >= 2){
    li[i].style.backgroundColor = 'red'
  }

  li[i].style.marginBottom = '2px'
  li[i].style.padding = '12px'
  li[i].style.fontSize = '12px'
  li[i].style.fontSize = '12px'
  li[i].style.opacity =  '0.7'
}


function getDate(){
  let date = new Date() .toISOString()
  return date.replace('T', ' ').slice(0,-5)
}

  //Span
  const dateSpan = document.createElement('span')
  dateSpan.innerHTML = getDate()
  dateSpan.style.textAlign = 'center'
  dateSpan.style.backgroundColor = 'red'
  dateSpan.style.padding = '5px 18px'

  //div
  const dateContainer = document.createElement('div')
  dateContainer.style.display = 'flex'
  dateContainer.style.justifyContent = 'center'
  dateContainer.appendChild(dateSpan)

//intervalo del cambio de fondo de fecha 
setInterval(() => {
  dateSpan.style.backgroundColor = hexaColor()
  dateSpan.innerHTML = getDate()
}, 1000);


wrapper.insertBefore(dateContainer, ul)

function hexaColor(){
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
      index = Math.floor(Math.random() * str.length)
      hexa += str[index]
  }
  return hexa
}