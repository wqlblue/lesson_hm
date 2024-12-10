// 

function part(nums) {

    let sum = nums.reduce((a, b) => a + b)
    let dp = Array(sum / 2 + 1).fill(0)
    if (sum & 1) return false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = sum / 2; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
            if (dp[j] === sum / 2) return true;
        }
    }
}