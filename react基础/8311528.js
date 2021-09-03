const Event = function () {
    this.list = []
};

Event.prototype.add = function (listener) {
    this.list.push(listener)
}

Event.prototype.triggle = function () {
    this.list.forEach(listener => {
        listener()
    })
}

const event = new Event();

event.add(() => {
    console.log('房源1--80平--200万')
})
event.add(() => {
    console.log('房源2--200平--1000万')
})
console.log(event)
event.triggle()