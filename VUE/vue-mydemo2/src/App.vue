<!-- <template>
  <div>
    <h2> 姓名:{{ name }}</h2>
    <h2> 年龄:{{ age }}</h2>
    <button @click="changeName">增加~</button>
    <button @click="changeAge">加一</button>
  </div>
</template>

<script setup>
import { toRefs, reactive, toRef } from 'vue'
let person = reactive({
  name: '张三',
  age: 18
})
let { name, age } = toRefs(person)
let x = toRef(person, 'name')
console.log(x.value);

const changeAge = () => {
  age.value += 1
  console.log(age);
}
const changeName = () => {

  name.value += '!'
  console.log(name);
}
</script>
<style lang="scss" scoped></style>
   -->


<!-- <template>
  <div>
    姓:<input type="text" v-model="firstname"><br>
    名:<input type="text" v-model="lastname"><br>
    姓名: <span>{{ fullname }}</span>
    <button @click="changefullname">把名字改为lisi</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let firstname = ref('zhang');
let lastname = ref('san');

const fullname = computed({
  get: () => {
    return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + lastname.value;
  },
  set: (val) => {
    let [str1, str2] = val.split('-');
    firstname.value = str1;
    lastname.value = str2;
  }
});

function changefullname() {
  // 这里可以通过修改 firstname 和 lastname 来间接修改 fullname
  // firstname.value = 'li';
  // lastname.value = 'si';
  fullname.value = 'li-si'
}
</script>

<style lang="scss" scoped></style> -->

<!-- <template>
  <div>
    当前数字为<h2>{{ sum }}</h2>
    <button @click="changesum">add</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
let sum = ref(0);
function changesum() {
  sum.value += 1;
}
const stopwatch = watch(sum, (newValue, oldValue) => {
  console.log('变化了', newValue, oldValue);
  if (newValue >= 10) {
    stopwatch()
  }
});
</script>

<style lang="scss" scoped></style> -->


<!-- <template>
  <div>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="changeName">改名字</button>
    <button @click="changeAge">改年龄</button>
    <button @click="changePerson">改整个人</button>
    <hr>
    <h2>测试 :{{ obj.a.b.c }}</h2>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
let person = reactive({
  name: '张三',
  age: 18
})

let obj = reactive({ a: { b: { c: 666 } } })
const changeAge = () => {
  person.age += 1


}
const changeName = () => {
  person.name += "~"
}
const changePerson = () => {
  Object.assign(person, { name: '李四', age: 30 })
}
watch(person, (oldValue, newValue) => {
  console.log('变化了', newValue, oldValue);

})
const test = () => {
  obj.a.b.c = 888
}
watch(obj, (newValue, oldValue) => {
  console.log('变化了', newValue, oldValue);

})
</script>

<style lang="scss" scoped></style> -->




<!-- <template>
  <div>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>汽车:{{ person.car }}</h2>
    <button @click="changeName">改名字</button>
    <button @click="changeAge">改年龄</button>
    <button @click="changeC1">改c1</button>
    <button @click="changeC2">改c2</button>
    <button @click="changeCar">改car</button>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
let person = reactive({
  name: '张三',
  age: 18,
  car: {
    c1: '奔驰',
    c2: '宝马'
  }
})

const changeName = () => {
  person.name += "~"
}
const changeAge = () => {
  person.age += 1
}
const changeC1 = () => {
  person.car.c1 = '奥迪'
}
const changeC2 = () => {
  person.car.c2 = '大众'
}
const changeCar = () => {
  person.car = {
    c1: '雅迪',
    c2: '艾玛'
  }
}
watch([() => person.car, () => person.name], (newValue, oldValue) => {
  console.log('person.car变化了', newValue, oldValue);

}, { deep: true })
</script>

<style lang="scss" scoped></style> -->


<!-- <template>
  <div>
    <div class="box" @mousemove="debouncedAddnum">{{ a }}</div>
  </div>
</template>

<script setup>
//引入依赖
import { ref } from "vue";
import _ from "lodash";
//定义响应式数据和防抖函数引用
let a = ref(0);
let debouncedFunction;
//定义普通自增方法和防抖触动方法
const addnum = () => {
  a.value++;
};
const debouncedAddnum = () => {
  if (!debouncedFunction) {  //如未初始化则初始化， 使用 _.debounce(addnum, 500) 创建一个 Lodash 的防抖函数，并将其存储在 debouncedFunction 中
  }
  debouncedFunction();
};

</script>

<style lang="css" scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: antiquewhite;
}
</style> -->
<template>
  <div>
    <div class="box" @mousemove="throttledFunction">{{ a }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let a = ref()
// 模拟频繁触发
</script>

<style lang="css" scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: antiquewhite;
}
</style>