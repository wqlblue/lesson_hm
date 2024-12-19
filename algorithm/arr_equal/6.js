function arrEqual() {
    if (arr1.length !== arr2.length) {
        return false
    }
    let map = new Map()
    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i], (map.get(arr1[i]) ?? 0) + 1);
    }
    for (const item of arr2) {
        const val = countMap.get(item);
        if (val === undefined || val <= 0) {
            return false;
        }
        countMap.set(item, val - 1);
    }
    return true;
}