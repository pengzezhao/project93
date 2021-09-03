class Person{
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    speak(){
        console.log('我会说我的名字：'+this.name)
    }
}

class Star extends Person{
    constructor(name,age,nation) {
        super(name,age)
        this.nation=nation
    }
    speak() {
        console.log('speak被重新定义了！')
    }

    dance(){
        console.log('我会跳舞！')
    }

}

let person=new Star('lyf',20,'China')
console.log(person)
person.speak()
person.dance()