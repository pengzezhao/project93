let arr = [1, 2, 3, 4, 5]
let aver = new Array(arr.length).fill(0)
aver[0] = arr[0]
console.log(aver)
for (let i = 1; i < arr.length; i++) {
    aver[i] = (arr[i] + aver[i - 1] * i) / (i + 1)
}
console.log(aver)

console.log((0.3).toString(2))