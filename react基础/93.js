let arr=[1,2,[3,4,[5]]]
let arr1=[]
function myflat(){
    for(let i of arr){
        if(typeof i ==='object'){
            myflat(i)
        }else{
            arr1.push(i)
        }
    }
}
console.log(arr1);