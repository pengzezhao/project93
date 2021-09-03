function Person() {
    this.name='lyf'
}
Person.prototype.say=function () {
    console.log('hello!')

}

// (function fun() {
//     console.log('shuohuaa')
// })()

let per=new Person()
per.say()
