function fun2(x, n) {
    if (n === 0) {
        return 1;
    }

    // 把问题分解为规模更小的问题 自顶向下
    return x * fun2(x, n - 1);
}