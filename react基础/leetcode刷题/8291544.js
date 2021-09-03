let num = 512
let arr = []
for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        if (i * i === num) {
            arr.push(i)
        } else {
            arr.push(i, num / i)
        }
    }
}
console.log(arr)
arr.sort((a, b) => a - b)
console.log(arr)

const kthFactor = function (num, k) {
    let arr = []
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            if (i * i === num) {
                arr.push(i)
            } else {
                arr.push(i, num / i)
            }
        }
    }
    arr.sort((a, b) => a - b)
    if (arr.length < k) {
        return -1
    }
    return arr[k - 1]
};