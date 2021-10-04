const changeText = () => {
  const p = document.querySelector('p')
  p.textContent = 'Inline Event Handler Attributes'
}

const button = document.getElementById('btn-two')
button.onclick = () => {
  const p = document.querySelector('p')
  p.textContent = 'Event Handler Properties'
}

const btnThree = document.getElementById('btn-three')
const changeTextListener = () => {
  const p = document.querySelector('p')
  p.textContent = 'Event Listener'
}
const alertText = () => {
  alert('Will I alert?')
}
btnThree.addEventListener('click', changeTextListener)
btnThree.addEventListener('click', alertText)
btnThree.removeEventListener('click', alertText)

// Test the key and code properties
document.addEventListener('keydown', (event) => {
  console.log('key: ' + event.key)
  console.log('code: ' + event.code)
})

// Event Object
document.addEventListener('keydown', (event) => {
  const btnObject = document.getElementById('event-object')

  // Set variables for keydown codes
  let a = 'KeyA'
  let s = 'KeyS'
  let d = 'KeyD'
  let w = 'KeyW'

  // Set a direction for each code
  switch (event.code) {
    case a:
      btnObject.textContent = 'Left'
      break
    case s:
      btnObject.textContent = 'Down'
      break
    case d:
      btnObject.textContent = 'Right'
      break
    case w:
      btnObject.textContent = 'Up'
      break
  }
})

const section = document.querySelector('section')

// Print the selected target
section.addEventListener('click', (event) => {
  console.log(event.target)
})
