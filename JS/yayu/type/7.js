
console.log([1, 2, 3].map(parseInt));



console.log([1, 2, 3].map((v, index, item) => {
    console.log(v, index, item);
    return parseInt(v, index);
}));







// 1.parseInt 的基数规则
// parseInt 的第二个参数是 基数（radix），它决定了如何解析字符串。radix 的有效范围是 2 到 36。
// 如果 radix 不在这个范围内，parseInt 会根据以下规则处理：

// radix 为 0 或省略：parseInt 会尝试根据字符串的内容推断基数：
// 如果字符串以 0x 或 0X 开头，parseInt 会将其视为十六进制（基数 16）。
// 如果字符串以 0 开头且不包含小数点或其他非八进制字符，parseInt 会将其视为八进制（基数 8）。
// 不过，这种行为在现代 JavaScript 中已经被弃用，通常会默认为十进制。
// 否则，默认为十进制（基数 10）。
// radix 为 1：parseInt 会返回 NaN，因为 1 不是有效的基数。基数 1 意味着每个数字只能由一个符号表示，
// 这在数学上是没有意义的。因此，parseInt 无法使用基数 1 来解析任何数字。




// 2. Array.prototype.map 方法的行为
// map 是数组的一个方法，它会遍历数组中的每个元素，并对每个元素调用传入的回调函数。map 的回调函数签名是：


// callback(currentValue, index, array)
// currentValue：当前元素的值。
// index：当前元素的索引。
// array：调用 map 的数组本身。



// 3. parseInt 的行为细节
// parseInt 的第二个参数是 基数（radix），它决定了如何解析字符串。如果 radix 是无效的或不在 2 到 36 之间，parseInt 会根据以下规则处理：

// radix 为 0 或省略：parseInt 会忽略它并使用默认的 10 进制。
// radix 为 1：parseInt 会返回 NaN，因为 1 不是有效的基数。基数 1 意味着每个数字只能由一个符号表示，这在数学上是没有意义的。
// radix 为 2 到 36：parseInt 会根据指定的基数解析字符串。