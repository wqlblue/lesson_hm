const hash = [];   // 某层结果和数组的下标一一对应
function climbHashStaris(n) {

    if (hash[n] in hash) {
        return hash[n]  // 记忆化
    }
    if (n === 2) {
        return 2;
    }
    if (n === 1) {
        return 1;
    }

    return hash[n] = climbHashStaris(n - 1) + climbHashStaris(n - 2)

}
console.time("climb");

console.log(climbHashStaris(30));

console.timeEnd("climb");