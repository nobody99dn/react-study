let btn = document.querySelector('input[type="button"]')
let table = document.querySelector('#sampleTable')

btn.insert_Row = () => {
  const rowCount = document.getElementsByTagName('tr')

  //add 2 cell in 1 row
  let row = document.createElement('tr')
  for (let i = 0; i < 2; i++) {
    let cell = document.createElement('td')
    cell.textContent = `Row${rowCount.length + 1} cell${i + 1}`

    row.appendChild(cell)
  }

  table.appendChild(row)
}
