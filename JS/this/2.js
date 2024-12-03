var name = "刀郎"
var a = {
    name: "薛之谦",
    func1: function () {
        console.log(this.name);
    },
    func2: function () {
        setTimeout(function () {    // 匿名函数 没有this
            // this被指定了
            this.func1();
        }.call(a), 1000)
    }
}
a.func2();