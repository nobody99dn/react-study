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
