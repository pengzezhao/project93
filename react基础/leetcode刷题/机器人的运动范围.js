// function add() {
//     var i = 0;
//     return function() {
//         alert(i++);
//     }
// }
// var f = add();
// f();
// f();
function digitSum(n) {
    let ans = 0
    while (n) {
        ans = ans + n % 10
        n = Math.floor(n / 10)
    }
    return ans
}

//console.log(digitSum(543))

const movingCount = function (m, n, k) {
    let visited = new Set()
    visited.add(0 + ',' + 0)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let tem1 = i - 1, tem2 = j - 1
            if ((visited.has(tem1 + ',' + j) || visited.has(i + ',' + tem2)) && digitSum(i) + digitSum(j) <= k) {
                visited.add(i + ',' + j)
            }
        }
    }
    return visited

}
console.log(movingCount(20, 20, 5))
console.log(1 + ',' + (3 - 1))
console.log([1,2].toString())

let set = new Set()
set.add(0 + ',' + 0)
set.add([1,2].toString())
let a=[1,2]
set.add(a)
console.log(set)
console.log(set.has(a))
