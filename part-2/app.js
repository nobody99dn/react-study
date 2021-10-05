let form = document.querySelector('#form1')

form.onsubmit = () => {
  const firstName = document.querySelector('[name="fname"]').value
  const lastName = document.querySelector('[name="lname"]').value
  console.log(`${firstName} ${lastName}`)
}
