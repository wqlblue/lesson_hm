

// - 动态规划自底向上 解决问题 迭代

// - 适合用动态规划 最终值 ， 最优解  dp 
// - 先递归 找到大问题 跟 子问题的关系  => 状态转移方程    
const climbStaris = function (n) {
    const f = [];  // f[i] 最后结果  
    f[1] = 1;
    f[2] = 2;
    // 迭代 
    for (let i = 3; i <= n; i++) {

        f[i] = f[i - 1] + f[i - 2];
    }

    return f[n];
}

