const set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(3)
console.log(set.size);

const arr = [1, 2, 3, 3]
var uniqueArr = [...new Set(arr)]

console.log(uniqueArr);
