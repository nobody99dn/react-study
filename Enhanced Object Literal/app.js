/*
* 1. Định nghĩa key: value cho object
  2. Định nghĩa method cho object
  3. Định nghĩa key cho object dưới dạng biến
*/

let fieldName = 'JavaScript'
let fieldPrice = 'price'

const course = {
  name: 'JavaScript',
  [fieldName]: 'JavaScript',
  [fieldPrice]: 1000
}

console.log(course)
