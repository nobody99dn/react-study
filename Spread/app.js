function logger(a, b, ...params) {
  console.log(params)
}

console.log(1, 2, 3, 4)

function logger1({ name, price, ...rest }) {
  console.log(name)
  console.log(price)
  console.log(rest)
}

logger1({
  name: 'JavaScript',
  price: 1000,
  desc: 'Description content',
  vote: '4'
})

let array1 = ['JavaScript', 'Ruby', 'PHP']

let array2 = ['ReactJS', 'Dart']

let array3 = [...array1, ...array2]

console.log(array3)

let defaultConfig = {
  api: 'google.com',
  apiVersion: 'v1'
}

let exerciseConfig = {
  ...defaultConfig,
  api: 'facebook.com'
}

console.log(exerciseConfig)

// rest parameters
let [v, d, t] = array1

console.log(v, d, t)
