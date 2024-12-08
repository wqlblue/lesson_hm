/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let dp = []
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[n] = dp[n - 1] + dp[n - 2]
    }

    return dp[n]
};
console.log(fib(3));
