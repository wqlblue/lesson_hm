
function typeOf(obj) {
    // typeof 除了null 之外的基本数据类型
    // function 可以之外都是 object
    // let res = Object.prototype.toString.call(obj).split(' ')[1]
    //  不包含endIndex , substring 如果 endindex 为负数，那么它会被当做 0 处理，
    // 且endindex小于startIndex，那么它们会交换
    // res = res.substring(0, res.length - 1).toLowerCase();
    // return res;
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()   // 负方向从-1开始算，所以-1就是最后一个字符
}




console.log(typeOf([]));
