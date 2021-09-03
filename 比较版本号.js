let arr1 = [1, 2, 3, 4, 5]
let arr2 = [1, 2]
max = Math.max(arr1.length, arr2.length)
a = max - arr1.length
b = max - arr2.length
console.log(a, b)
for (let i = 0; i < a; i++) {
    arr1.push(0)
}
for (let i = 0; i < b; i++) {
    arr2.push(0)
}
console.log(arr1)
console.log(arr2)

function compareVersion(version1, version2) {
    let arr1 = version1.split('.').map(v => Number.parseInt(v))
    let arr2 = version2.split('.').map(v => Number.parseInt(v))
    let max = Math.max(arr1.length, arr2.length)
    let a = max - arr1.length
    let b = max - arr2.length
    for (let i = 0; i < a; i++) {
        arr1.push(0)
    }
    for (let i = 0; i < b; i++) {
        arr2.push(0)
    }
    for (let i = 0; i < max; i++) {
        if (arr1[i] > arr2[i]) {
            return 1
        }
        if (arr1[i] < arr2[i]) {
            return -1
        }
    }
    return 0
}

const str = "A";
str.charCodeAt();  // 65

let str1 = 'a';
str1.charCodeAt();  // 97

const num = 97;
String.fromCharCode(num);  // 'a'

const num1 = 100;
String.fromCharCode(num1);  // 'd'
console.log(String.fromCharCode(97))

const maxSubArray = function (nums) {
    let size = nums.length
    if (size === 0) {
        return 0
    }
    if (size === 1) {
        return nums[0]
    }
    let dp = new Array(size).fill(0)
    dp[0] = nums[0]
    for (let i = 1; i < size; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
    }
    return Math.max(...dp)
};
