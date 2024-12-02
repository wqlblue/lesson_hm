// 递归快速幂算法

function func(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }
    const half = func(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}