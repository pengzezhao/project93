// let num = 100
// console.log(Number.parseInt('123'))
// console.log(Math.trunc(12.3))
// console.log(parseInt('123'))
// console.log(Number.parseInt())
// console.log(0o10)
// console.log(0o11)
//
var tmp = 'out';
function f() {
    console.log(tmp);
    var tmp = "inner";
    console.log(tmp)
}
f();
// console.log(tmp)
//
// function a(){}
// var a;
// console.log(a);
// var b;
// function b(){}
// console.log(b)
// var c=1;
// function c(){}
// console.log(c);
// function d(){}
// var d=1;
// console.log(d);