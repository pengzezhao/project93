let arr = [1, 2, 3, 4, 5, 3, 3, 2, 4, 3]
arr1 = arr.filter(function (val) {
    return val !== 3
})
console.log(arr)
console.log(arr1)