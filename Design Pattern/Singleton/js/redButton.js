import singletonCounter from './counter'

document.querySelector('.redBtn').addEventListener('click', () => {
  singletonCounter.increment()
  console.log(singletonCounter.getCount())
})
