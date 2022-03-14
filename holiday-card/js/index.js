var animation = merryChristmas.loadAnimation({
  container: document.getElementById('merryChristmas'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/MerryChristmas.json'
})

var animation = merryChristmas.loadAnimation({
  container: document.getElementById('happyHolidays'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/HappyHolidays.json'
})

var animation = merryChristmas.loadAnimation({
  container: document.getElementById('happyThanksgiving'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/happyThanksgiving.json'
})

// Handle click
document.querySelectorAll('.holiday-card__item').forEach((item) => {
  item.addEventListener('click', (event) => {
    document
      .querySelector('.holiday-card__item.active')
      .classList.remove('active')

    item.classList.add('active')
  })
})
