const coinChange = function (coins, amout) {
    const f = [];// 每个面额对应的最小硬币个数  最优值
    f[0] = 0; //初始值
    //迭代
    for (let i = 1; i < amout; i++) {
        f[i] = Infinity;
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i - coins[j]] + 1)
            }
        }
    }
    return f[amout];


}

coinChange([1, 2, 5], 11)