import singletonCounter from './counter'

document.querySelector('.blueBtn').addEventListener('click', () => {
  singletonCounter.decrement()
  console.log(singletonCounter.getCount())
})
