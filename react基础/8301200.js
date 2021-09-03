function f() {
    let i=0
    return function () {
        console.log(i++)
    }
}

let fun=f()
fun()
fun()
fun()