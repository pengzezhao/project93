function Father(name, age) {
    this.name = name
    this.age = age
}

Father.prototype.earn = function () {
    console.log('爸爸要挣钱！')
}

function Son(name, age, score) {
    Father.call(this, name, age)
    this.score = score
}

// Son.prototype.exam=function () {
//     console.log('儿子要考试！')
// }
Son.prototype = new Father
Son.prototype.constructor = Son
Son.prototype.exam = function () {
    console.log('儿子要考试！')
}

let son = new Son('ldh', 20, 100)
console.log(son)
console.dir(Father)
console.dir(Son)
