// const titles = document.querySelectorAll('h1')
// titles.forEach((title,i)=> {
//     title.style.fontSize= '24px'
//     if (i%2 ===0) {
//         title.style.color = 'white'
//         title.style.background = 'green'
//         title.style.fontSize = '20px'
//     } else {
//         title.style.color = 'white'
//         title.style.background = 'red'
//         title.style.fontSize = '30px'
//     }
// })



// Exercise: Level 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name


// const paragraph = document.querySelector('p')

// //console.log(paragraph)


// // 2. Get each of the the paragraph using document.querySelector('#id') and by their id

// const firstParagraph = document.querySelector('#first-paragraph')
// // console.log("firstParagraph", firstParagraph)
// const secondParagraph = document.querySelector('#second-paragraph')
// // console.log("secondParagraph", secondParagraph)
// const thridParagraph = document.querySelector('#third-paragraph')
// // console.log("thridParagraph", thridParagraph)



// // 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

// const paragraphs = document.querySelectorAll('p')
// console.log("paragraphs", paragraphs)

//paragraphs.forEach(paragraph=> console.log(paragraph))


// 4. Loop through the nodeList and get the text content of each paragraph

//paragraphs.forEach(par=> console.log(par.textContent))


// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph

//paragraphs[3].textContent = 'Fourth Paragraph'


// 6. Set id and class attribute for all the paragraphs using different attribute setting methods



// paragraphs[3].id = 'fourth-paragraph'
// paragraphs[3].className = 'paragraph'


// paragraphs[3].setAttribute('id','fourth-paragraph')
// paragraphs[3].setAttribute('class','paragraph')

// console.log(paragraphs[3].id)
// console.log(paragraphs[3].className)



// Exercise: Level 2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

// paragraphs[0].style.color = 'white'
// paragraphs[0].style.background = 'red'
// paragraphs[0].style.border = 'dashed'
// paragraphs[0].style.fontSize = '30px'
// paragraphs[0].style.fontFamily = 'Roboto'

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color


// paragraphs.forEach((element,i)=> {
//     element.style.color =  i%2===0 ? 'green' : 'red'
// })


// 3. Set text content, id and class to each paragraph


// paragraphs[0].setAttribute('id','first-paragraph')
// paragraphs[0].setAttribute('class','paragraph')

// paragraphs[1].setAttribute('id','second-paragraph')
// paragraphs[1].setAttribute('class','paragraph')

// Exercise: Level 3

// DOM: Mini project 1

// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// 1. The year color is changing every 1 second
