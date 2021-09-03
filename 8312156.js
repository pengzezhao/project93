// function Observer() {
//     this.dep = [];
//
//     this.register=function(fn) {
//         this.dep.push(fn)
//     }
//
//     this.notify=function() {
//         this.dep.forEach(item => item())
//     }
// }
//
// const wantCake = new Observer();
// // 每来一个顾客就注册一个想执行的函数
// wantCake.register(() => {console.log("call daisy")})
// wantCake.register(() => {console.log("call anny")})
// wantCake.register(() => {console.log("call sunny")})
//
// // 最后蛋糕做好之后，通知所有的客户
// wantCake.notify()

var bValue;
var o = {};
Object.defineProperty(o, "b", {
    get : function(){
        console.log('监听正在获取b')
        return bValue;
    },
    set : function(newValue){
        console.log('监听正在设置b')
        bValue = newValue;
    },
    enumerable : true,
    configurable : true
});

o.b = 38;
console.log(o.b)