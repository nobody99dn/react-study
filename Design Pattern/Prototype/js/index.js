class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `Woof!`
  }
}

const dog1 = new Dog('Daisy')
const dog2 = new Dog('Tony')
const dog3 = new Dog('Spot')

Dog.prototype.play = () => console.log('Playing now!')

console.log(Dog.prototype)
console.log(dog1.__proto__)
dog2.play()

class SuperDog extends Dog {
  constructor(name) {
    super(name)
  }

  fly() {
    return 'Flying!'
  }
}

const dog4 = new SuperDog('Long')
dog4.bark()
console.log(dog4.fly())

const dog = {
  bark() {
    return `Woof`
  }
}

const pet1 = Object.create(dog)

console.log(pet1.bark())
