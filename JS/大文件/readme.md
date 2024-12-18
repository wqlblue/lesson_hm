- 为什么File.slice() 方法返回的是一个Blob对象？
    在 JavaScript 中，File对象实际上是Blob对象的一个子类。Blob（Binary Large Object）代表二进制大对象，它是一个不可变的、原始数据的类文件对象。File对象继承了Blob对象的属性和方法，并且添加了一些与文件相关的特定属性，如name（文件名）、lastModified（最后修改日期）等。
    因为File对象本质上是一种特殊的Blob对象，所以File对象的slice方法返回Blob对象是很自然的继承行为。slice方法的目的是提取原始File或Blob对象中的一部分数据，返回的数据自然也应该是与原始数据类型兼容的，即Blob类型。