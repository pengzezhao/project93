var clone = function (obj) {
    return JSON.parse(JSON.stringify(obj));
}
var a = {
    a:function(){console.log('hello world')},
    b:{c:1},
    c:[1,2,3],
    d:"wanger",
    e:new Date(),
    f:null,
    g:undefined
}
var b = clone(a)
console.log(b)
console.log(888888888888888888888888);