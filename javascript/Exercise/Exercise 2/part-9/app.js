let btn = document.querySelector('[type="button"]')

let count = 0

btn.getOptions = () => {
  count++
  const select = document.querySelector('#mySelect')
  const value = select.options[select.selectedIndex].value

  alert(`
    Count: ${count}
    Color: ${value}
    `)
}
