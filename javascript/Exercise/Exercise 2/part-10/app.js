let btn = document.querySelector('[type="button"]')
const pi = 3.14

btn.addEventListener('click', () => {
  const r = document.querySelector('input[name="radius"]').value

  const v = document.querySelector('input[name="volume"]')
  const volume = (4 * pi * r * r * r) / 3

  v.value = volume.toFixed(2)
})
