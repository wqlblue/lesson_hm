function listTotree(nodes, parentId = "") {
    return nodes.filrer(item => item.parentId === parentId).map(
        item => {
            item.children = listTotree(nodes, item.id)
            return item
        }
    )
}

// .map(item=>({}))  表示返回一个对象字面量
//在这种情况下，({ ...item, children: listTotree2(nodes, item.id) }) 被视为一个表达式，表示返回一个对象字面量。
//圆括号告诉 JavaScript，大括号内的内容是一个对象字面量，而不是函数体。

const nodemap = new Map()
nodemap.forEach(item => {
    item.children = [];
    nodemap.set(item.id, item)
})
function listTotree2(nodes, parentId = "") {
    return nodes.filrer(item => item.parentId === parentId).map(item => ({
        ...item,
        children: listTotree2(nodes, item.id)
    }))
}
