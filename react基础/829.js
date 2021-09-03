let arr = [1, 2, 3, 4, 5, 6]
let halflen = Math.floor(arr.length / 2)
for (let i = 0; i < halflen; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
}
console.log(arr)
