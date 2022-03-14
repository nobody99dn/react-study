let counter = 0
let instance

class Counter {
  constructor(instance) {
    if (instance) {
      throw new Error('You can only create one instance!')
    }
    instance = this
  }

  getInstance() {
    return this
  }

  getCount() {
    return counter
  }

  increment() {
    return ++counter
  }

  decrement() {
    return --counter
  }
}

//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
const singletonCounter = Object.freeze(new Counter())
export default singletonCounter
