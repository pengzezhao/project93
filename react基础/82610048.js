function Parent() {
    this.name111 = 'aa';
}

Parent.prototype.getName = function () {

    console.log(this.name111);

}

function Child() {
}

Child.prototype = new Parent();

let child = new Child();
console.dir(Parent)
console.dir(Child)

child.getName()// aa