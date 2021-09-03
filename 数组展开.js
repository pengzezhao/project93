let arr = [1, , ,[2,[] ,3], [4, [5, 6, [7]], 7]]
console.log(arr)

function bianlifalt(arr) {
    function bianli(arr) {
        for (let i of arr) {
            if (Array.isArray(i)) {
                bianli(i)
            } else {
                arr1.push(i)
            }
        }
    }

    let arr1 = []
    bianli(arr)
    return arr1
}

console.log(bianlifalt(arr))