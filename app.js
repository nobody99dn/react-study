/* Exercise 1:  The Logo Hijack*/

/*  Step 1: Access https://www.google.com 

    //Modify logo
    Step 2: Right click on Google logo, select Inspect
    Step 3: Copy class name of img
    Step 4: Open Console in Chrome Dev Tool
    Step 5: Get logo's element: const logo = document.querySelector('<class name>')
    Step 6: Modify Google logo: logo.setAttribute('srcSet', '<Yahoo logo's link>')

    //Modify text in button
    Step 2: Right click on button, select Inspect
    Step 3: Copy class name of button
    Step 4: Open Console in Chrome Dev Tool
    Step 5: Get logo's element: const searchBtn = document.querySelector('<class name>')
    Step 6: Modify Google logo: logo.setAttribute('value', 'Yahooo!')
    */

/* Exercise 2: About me */

const body = document.querySelector('body')

//set font-family
body.style.fontFamily = 'Arial, sans-serif'

let nickname = document.querySelector('#nickname')
let favorites = document.querySelector('#favorites')
let hometown = document.querySelector('#hometown')

//set info
nickname.textContent = 'vawn'
favorites.textContent = 'music'
hometown.textContent = 'Viet Nam'

let infos = document.getElementsByTagName('li')

for (const info of infos) {
  info.classList.add('listitem')
}

//append new element
let newElement = document.createElement('img')

newElement.setAttribute(
  'src',
  'https://d33wubrfki0l68.cloudfront.net/57ce66bdb5af93ea9a42eaf52f58a6550e08ef35/52712/images/agility-logo.png'
)

body.appendChild(newElement)
