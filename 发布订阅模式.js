class Sub {
    constructor() {
        // 收集订阅信息,调度中心
        this.list = {}
    }
    // 订阅
    on(name, userId, fn) {
        if (!this.list[name]){
            this.list[name] = []
        }
        this.list[name].push({userId: userId, fn: fn})
    }
    // 发布
    emit(name, content) {
        this.list[name].forEach(item => {
            item.fn(content)
        })
    }
    // 取消订阅
    off(name, userId) {
        this.list[name].forEach((item, index) => {
            if (item.userId === userId) {
                this.list[name].splice(index, 1)
            }
        })
    }
}

let sub = new Sub();
//A关注人民日报公众号
sub.on('人民日报', 'A', function (content) {
    console.log('A接收到人民日报推送的消息', content)
})
//B关注湖北日报公众号
sub.on('湖北日报', 'B', function (content) {
    console.log('B接收到湖北日报推送的消息', content)
})
//C关注人民日报公众号
sub.on('人民日报', 'C', function (content) {
    console.log('C接收到人民日报推送的消息', content)
})
console.log(sub.list['湖北日报'])

//
sub.emit('人民日报', '最高礼遇！以国之名，致敬！')
sub.emit('湖北日报', '教育部明确！2021年起免试认定！')
sub.off('人民日报', 'A')
sub.emit('人民日报', "严防不懈！新增确诊2例，均为境外输入")
