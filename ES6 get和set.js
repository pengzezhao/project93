class Phone {
    // constructor(price) {
    //     this.price=price
    // }
    get price(){
        console.log('price被读取了！')
    }
    set price(val){
        console.log('price被修改了！')
    }
}

let s=new Phone()
console.log(s.price)
s.price='1000'