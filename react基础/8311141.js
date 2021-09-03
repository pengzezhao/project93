let p = new Promise(function (resolve, reject) {
    resolve('ok')
    reject('error')
})
p.then(function (val) {
    console.log(val)
})
    .catch(function (res) {
        console.log(res)
    })

let p1=Promise.resolve()
console.log(p1)