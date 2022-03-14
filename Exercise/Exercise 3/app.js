let signupBtn = document.querySelector('#signup')
let resetBtn = document.querySelector('#reset')

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const regexUsername =
  /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/

signupBtn.SignUpForm = () => {
  let result = document.querySelector('.result')
  result.innerHTML = ''

  const email = document.querySelector('input[name="email"]').value
  const username = document.querySelector('input[name="username"]').value
  const pwd = document.querySelector('input[name="pwd"]').value
  const cpwd = document.querySelector('input[name="cpwd"]').value

  let notiEmail = document.querySelector('.info-email > .notification')
  let notiUsername = document.querySelector('.info-username > .notification')
  let notiPwd = document.querySelector('.info-pwd > .notification')
  let notiCpwd = document.querySelector('.info-cpwd > .notification')

  if (email === '') {
    return (notiEmail.textContent = 'Do not empty email')
  } else if (!email.match(regexEmail)) {
    return (notiEmail.textContent = 'Please enter correct email!')
  } else if (username === '') {
    return (notiUsername.textContent = 'Do not empty username!')
  } else if (!username.match(regexUsername)) {
    return (notiUsername.textContent = 'Please enter correct username!')
  } else if (pwd === '') {
    return (notiPwd.textContent = 'Do not empty password')
  } else if (cpwd === '') {
    return (notiCpwd.textContent = 'Please confirm password')
  } else if (pwd != cpwd) {
    return (notiCpwd.textContent = 'Confirm password failed!')
  }

  let notis = document.getElementsByClassName('notification')

  for (const noti of notis) {
    noti.innerHTML = ''
  }

  //print
  let newEmail = document.createElement('p')
  let newUsername = document.createElement('p')
  let newPwd = document.createElement('p')
  let newCpwd = document.createElement('p')

  newEmail.textContent = `Email: ${email}`
  newUsername.textContent = `Username: ${username}`
  newPwd.textContent = `Password: ${pwd}`
  newCpwd.textContent = `Confirm Password: ${cpwd}`

  result.appendChild(newEmail)
  result.appendChild(newUsername)
  result.appendChild(newPwd)
  result.appendChild(newCpwd)

  result.style.color = 'green'
}

resetBtn.reset = () => {
  const email = document.querySelector('input[name="email"]')
  const username = document.querySelector('input[name="username"]')
  const pwd = document.querySelector('input[name="pwd"]')
  const cpwd = document.querySelector('input[name="cpwd"]')

  email.value = ''
  username.value = ''
  pwd.value = ''
  cpwd.value = ''
}
