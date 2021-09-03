var MyHashMap = function () {
    this.BASE = 11;
    this.data = new Array(this.BASE).fill(0).map(() => []);
};

MyHashMap.prototype.put = function (key, value) {
    const h = this.hash(key);
    for (const it of this.data[h]) {
        if (it[0] === key) {
            it[1] = value;
            return;
        }
    }
    this.data[h].push([key, value]);
};

MyHashMap.prototype.get = function (key) {
    const h = this.hash(key);
    for (const it of this.data[h]) {
        if (it[0] === key) {
            return it[1];
        }
    }
    return -1;
};

MyHashMap.prototype.remove = function (key) {
    const h = this.hash(key);
    for (const it of this.data[h]) {
        if (it[0] === key) {
            const idx = this.data[h].indexOf(it);
            this.data[h].splice(idx, 1);
            return;
        }
    }
};

MyHashMap.prototype.hash = function (key) {
    return key % this.BASE;
}

let hash = new MyHashMap()
for (let i = 1; i < 20; i++) {
    hash.put(i + '', i)

}
console.log(hash)