function add(a,b) {
    return a+b
}
function hanshu() {
    return add
}
console.log(hanshu()(111, 333));


function Person(name,age){
    this.name=name
    this.age=age
}
Person.prototype.sing=function (){
    console.log('我会唱歌！')
}
console.dir(Person)
let person=new Person('lyf',20)
console.log(person)
let person1=Person('kkk',30)
console.log(person1)

// function Strar(name) {
//     this.name=name
// }
// Strar.prototype.dance=function (){
//     console.log('我会跳舞！')
// }
// Person.prototype=Strar.prototype
// console.dir(Person)

// let num=10
// console.log(num.toString(2))
// console.log(num)