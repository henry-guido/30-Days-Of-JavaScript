let key = 'a'
document.body.addEventListener('keyup',loadText)

const wraper = document.createElement('div')
wraper.className = 'wraper'
wraper.style.display = 'grid'
wraper.style.justifyItems = 'center'
wraper.style.placeItems = 'center'
wraper.style.alignContent = 'center'
wraper.style.gap = '20px'

wraper.style.height = '100vh'


const texthelper = document.createElement('div')
texthelper.innerHTML = `Press any keyboard key`
texthelper.style.boxShadow =  '0px 3px 12px 4px rgba(0,0,0,0.1)'
texthelper.style.width = '45%'
texthelper.style.height = '60px'
texthelper.style.display = 'flex'
texthelper.style.justifyContent = 'center'
texthelper.style.alignItems = 'center'
texthelper.style.fontSize = '2rem'
texthelper.style.fontWeight = 'bold'

const keyCode = document.createElement('div')



function loadText(e){
texthelper.innerHTML = 'You pressed'
const span = document.createElement('span')
span.style.color = 'green'
span.innerHTML = e.key
span.style.marginLeft = '7px'
texthelper.appendChild(span)

keyCode.style.boxShadow = '0px 3px 12px 4px rgba(0,0,0,0.1)'
keyCode.style.borderRadius = '5px'
keyCode.style.width = '6rem'
keyCode.style.height = '7rem'
keyCode.style.display = 'flex'
keyCode.style.justifyContent = 'center'
keyCode.style.alignItems = 'center'
keyCode.style.fontSize = '2rem'
keyCode.style.fontWeight = 'bold'
keyCode.style.color = 'green'

keyCode.innerHTML = e.keyCode

wraper.appendChild(keyCode)
}


document.body.appendChild(wraper)
wraper.appendChild(texthelper)


