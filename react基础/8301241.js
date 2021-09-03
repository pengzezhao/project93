let obj={1:'a'}
console.log(obj.hasOwnProperty(1))
console.log(obj.hasOwnProperty('1'))

let reg=/([0-9]+)-([0-9]+)-([0-9]+)/
console.log(reg.test('121125521-111'))