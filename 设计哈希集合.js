// let num=100
// function fun() {
//     console.log(num)
//      num=345
// }
// fun()
// console.log(num)

// let BASE = 10;
// let data = new Array(BASE).fill(0).map(() => new Array());
// console.log(data)

const MyHashSet = function () {
    this.BASE = 11;
    this.data = new Array(this.BASE).fill(0).map(() => []);
};
//添加元素的时候，计算该元素除以base得到的余数i，插入到第i个子数组中。
MyHashSet.prototype.add = function (key) {
    const h = this.hash(key);
    for (const element of this.data[h]) {
        if (element === key) {
            return;
        }
    }
    this.data[h].push(key);
};

MyHashSet.prototype.remove = function (key) {
    const h = this.hash(key);
    const it = this.data[h];
    for (let i = 0; i < it.length; ++i) {
        if (it[i] === key) {
            it.splice(i, 1);
            return;
        }
    }
};

MyHashSet.prototype.contains = function (key) {
    const h = this.hash(key);
    for (const element of this.data[h]) {
        if (element === key) {
            return true;
        }
    }
    return false;
};

MyHashSet.prototype.hash = function (key) {
    return key % this.BASE;
}

let hash = new MyHashSet()
for (let i = 1; i < 40; i++) {
    hash.add(i)
}
for (let i = 1; i < 40; i++) {
    hash.add(i)
}
console.log(hash)
