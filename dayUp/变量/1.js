var a = 1,
    a = 2;
window.a = 3
function Test() {
    let a = 4;
    this.a = 5;
    setTimeout(function () {
        console.log(a);
    }, 10);
    setTimeout(function () {
        console.log(this.a);
    }, 20);
    setTimeout(() => {
        console.log(a);
    }, 30);
    setTimeout(() => {
        console.log(this.a);
    }, 40);
}
new Test();