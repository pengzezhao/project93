// let obj={
//     age:10,
//     speak:function (){
//         console.log(this)
//     }
// }
// obj.speak()
// let fun=obj.speak
// fun()

// function Person(name) {
//     this.name=name
// }
// Person.prototype.say=function () {
//     console.log(this)
//
// }
// let person=new Person('lyf')
// person.say()
// let fun=person.say
// fun()

class Person{
    constructor(name) {
        this.name=name
    }
    static a=10
    a=100
    say(){
        console.log(this)
    }
}

let person=new Person('lyf')
console.log(Person.a)
person.say()
let fun=person.say
fun()