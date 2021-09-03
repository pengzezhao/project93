function myInstanceOf(left, right) {
    let leftproto = left.__proto__
    let rightprototype = right.prototype
    while (true) {
        if (leftproto === null) {
            return false
        }
        if (leftproto === rightprototype) {
            return true
        }
        leftproto = leftproto.__proto__
    }
}

let arr = [1, 2]
console.log(myInstanceOf(arr, Array))

function Person(name) {
    this.name = name
}

let person = new Person('ldh')
console.log(myInstanceOf(person, Person))
console.log(myInstanceOf(person, Object))
console.log(myInstanceOf(Person, Object))
console.log(myInstanceOf(Person, Function))
console.log(myInstanceOf(Function, Object))
console.log(myInstanceOf(Object, Function))