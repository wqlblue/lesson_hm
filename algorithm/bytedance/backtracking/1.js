const letterMap = ["", "", "abc", "def", "ghi",
    "jkl", "mno", "pqrs", "tuv", "wxyz"];

function letterCombinations(digits) {
    // 回溯算法
    const result = [];
    const path = []; // 某一种路径

    if (digits.length === 0) {
        return result;
    }

    function backtracking(index) {
        // backtracking()

        const digit = dits[index] - '0';
        console.log(digit)
    }
    backtracking(0)

    return result;
}

letterCombinations("23")