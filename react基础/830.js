function Person(name) {
    this.name=name
}
person=new Person('ldh')
console.log(Object.getPrototypeOf(person)==Person.prototype)
console.log(person.__proto__.__proto__.__proto__)
console.log(person instanceof Person)
console.log(person instanceof Function)
console.log(person instanceof Object)
console.log(Person instanceof Object )
console.log(Person instanceof Function)
console.log(Function instanceof Object)
console.log(Object instanceof Function)