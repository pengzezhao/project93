let arr1=[1,2,3,4]
// arr2=arr1.slice()
arr2=[...arr1]
arr2[0]=10000000000
console.log(arr2)
console.log(arr1)