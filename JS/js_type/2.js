let obj = {
    name: "万齐磊",
    job: "前端开发工程师",
    company: "Bytedance"
}


// js是动态性的 

obj.hometown = "南昌"


// let a = 1;
// let b = a;
// b = 3;
// 堆不连续 栈连续 

let obj2 = obj;

obj2.name = "肖青林";
console.log(obj2, obj);




