/**
 *  @func 就地编辑
 *  @params {id,parent 父节点， value 默认值}
 *  @author wql
 *  @date 2024-11-30
 */
function Editinplace(id, parent, value) {
    this.id = id; // 跨函数共享属性
    this.parent = parent || document.body;
    this.value = value || '这个家伙很懒，什么也没留下';
    this.createElement(this.id);
}

Editinplace.prototype.createElement = function (id) {
    // console.log(id);
    // <div id="ep1"></div>
    this.containerElement = document.createElement('div');
    this.containerElement.id = this.id;
    this.parent.appendChild(this.containerElement);

    this.staticElement = document.createElement('span');
    this.staticElement.innerHTML = this.value;
    this.containerElement.appendChild(this.staticElement);
}
