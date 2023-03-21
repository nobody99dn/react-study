let btn = document.querySelector('[type="button"]')

btn.removecolor = () => {
  let select = document.querySelector('#colorSelect')

  let value = select.options[select.selectedIndex]

  value.remove()
}
