class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    introduce1() {
        console.log(`大家好，我叫${this.name}，今年${this.age}岁，家在${this.address}`);
    }
}

class Student extends Person {
    constructor(name, age, address, major) {
        super(name, age, address);
        this.major = major;
    }
    introduce() {
        console.log(`大家好，我叫${this.name}，今年${this.age}岁，家在${this.address}， 专业是${this.major}`);
    }
}

let person = new Person('ethan', 24, '包邮区');
person.introduce1();  // 大家好，我叫ethan，今年24岁，家在包邮区

let student = new Student('zyc', 18, '南京', '车辆工程');
student.introduce1();
student.introduce()// 大家好，我叫zyc，今年18岁，家在南京， 专业是车辆工程

