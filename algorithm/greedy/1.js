// // 贪心策略
// // 局部最优解
// // 全局最优解

// function coinchangeGreedy(coins, amt) {
//     let i = coins.length - 1;
//     let count = 0;
//     while (amt > 0) {
//         while (i > 0 && amt >= coins[i]) {
//             amt -= coins[i];
//             count++;
//         }
//         i--;
//     }
// }

// // 某种组合是适合贪心的
// coinchangeGreedy([1, 5, 10, 20, 50, 100], 131)
// // 贪心策略不适合
// coinchangeGreedy([1, 5, 10, 20, 50, 100], 132)


function coinChangeGreedy(coins, amt) {
    let i = coins.length - 1;
    let count = 0;


    while (amt > 0) {

        while (i > 0 && amt >= coins[i]) {
            amt -= coins[i];
            count++;
        }

        i--;
    }

    return amt === 0 ? count : -1;
}

console.log(coinChangeGreedy([2, 5], 3));
