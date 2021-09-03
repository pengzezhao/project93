setTimeout(() => {
    console.log(1);
}, 0);
setInterval(() => {
    console.log(2);
}, 0);
console.log(3);
new Promise(() => {
    console.log(4);
});