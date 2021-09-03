function deepCopy(obj) {
    let result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key]!==null) {
                result[key] = deepCopy(obj[key]);   //递归复制
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

// let obj={
//     name:'李二狗',
//     habby:['抽烟','喝酒','烫头'],
//     parents:{
//         father:'李四',
//         mother:'王五'
//     },
//     say(){
//         console.log('你说啊！')
//     }
// }
// console.log(obj)
// obj2=deepCopy(obj)
// obj2.name='刘亦菲'
// obj2.habby[0]='唱歌'
// obj2.parents.father='李日天'
// console.log(obj2)
//
// let obj3=JSON.parse(JSON.stringify(obj))
// obj3.name='刘德华'
// obj3.parents.father='李世民'
// console.log(obj3)

let obj=[1,[2,3],{name:'张三'}]
console.log(obj)
obj1=deepCopy(obj)
obj1[0]=111
obj1[1][0]=222
obj1[2].name='张学友'
console.log(obj1)
console.log(obj)