function climbStaris(n) {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    return climbStaris(n - 1) + climbStaris(n - 2)
}
console.time("climb");

console.log(climbStaris(30));

console.timeEnd("climb");