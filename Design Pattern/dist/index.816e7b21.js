let counter = 0;
let instance;
class Counter {
    constructor(instance1){
        if (instance1) throw new Error('You can only create one instance!');
        instance1 = this;
    }
    getInstance() {
        return this;
    }
    getCount() {
        return counter;
    }
    increment() {
        return ++counter;
    }
    decrement() {
        return --counter;
    }
}
const counter1 = new Counter();
const counter2 = new Counter();
console.log(counter1.getInstance() === counter2.getInstance());

//# sourceMappingURL=index.816e7b21.js.map
