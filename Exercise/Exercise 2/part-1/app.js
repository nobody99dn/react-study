let btn = document.querySelector('#jsstyle')

btn.onclick = () => {
  let text = document.querySelector('#text')
  text.style.fontFamily = 'Arial, serif'
  text.style.fontWeight = 'bold'
  text.style.color = 'red'
}
