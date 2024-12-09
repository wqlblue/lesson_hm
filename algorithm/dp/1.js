let dp = Array.from({ length: n }, () => Array(bagweight + 1).fill(0))

for (let i = weight[0]; i <= bagweight; i++) {
    dp[0][i] = value[0]
}

for (let i = 1; i < n; i++) {
    for (let j = 0; j <= bagweight; j++) {
        if (j < weight[i]) dp[i][j] = dp[i - 1][j]
        else {
            dp[i][j] = Math.max(dp[i][j - weight[i] + valuep[i], dp[i - 1]][j])
        }
    }
}