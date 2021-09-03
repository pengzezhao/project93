// for(var i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }
//
// let a = {b:1}
// console.log(a)
// let b = a
// console.log(a)
// console.log(b)
// a.x = a = {c:2};
// console.log(a)
// console.log(b)
// console.log(a.x, b.x)

var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,1);
console.log(fruits)