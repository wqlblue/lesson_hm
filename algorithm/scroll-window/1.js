var lengthOfLongestSubstring = function (s) {
    let left
    let map = new Map()
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            // 就是如果 存在 这种 tmmabct 的情况
            // 没有加Math.max的话就会导致它在遇到最后一个t的时候， 变成 0 + 1，这样m就重复了，
            // 所以他需要和它的left对比，防止left回退
            left = Math.max(map.get(s.right) + 1, left)
        }
        map.set(s[right], right)

        let maxLength = Math.max(maxLength, right - left + 1)
    }


}