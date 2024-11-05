<!-- <template>
  <div>
    <div class="person">
      <h2>姓名:{{ name }}</h2>
      <h2>年龄:{{ age }}</h2>
      <h2>地址:{{ address }}</h2>
      <h2>电话:{{ tel }}</h2>
    </div>
    <div class="btn">
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
    </div>
  </div>
</template>

<script setup>


import { ref } from "vue";

let name = ref('张三')
let age = ref('18')
let tel = '188888888'
let address = "江西省南昌市"
console.log(name);
console.log(age);
console.log(tel);
console.log(address);
const changeName = () => {
  const input = prompt('请输入一些内容：');
  name.value = input;
}
const changeAge = () => {
  const input = prompt('请输入一些内容：');
  age.value = input;
}
</script>

<style lang="css" scoped>
.person {
  display: flex;
  justify-content: center;
}

h2 {
  margin: 10px 10px;
}

.btn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style> -->


<!-- ref=======可以定义：基本类型  对象类型的响应式数据-->
<!-- reactive ========只能定义：对象类型 -->
<!-- <template>
  <div>
    <h2>一辆{{ car.brand }}车,价值{{ car.price }}万</h2>
    <button @click="changePrice">增加</button>

  </div>
  <ul>
    <li v-for="g in games" :key="g.id">{{ g.name }}</li>
  </ul>
  <button @click="addgame">ADDGANES</button>
  <hr>
  <h2>{{ obj.a.b.c }}</h2>
  <button @click="foo">aa</button>
</template>

<script setup>
import { reactive } from "vue";

let car = reactive({
  brand: '奔驰',
  price: 100
});
console.log(car);

let games = reactive([
  { id: '1', name: "王者荣耀" },
  { id: '2', name: '金灿灿' },
  { id: '3', name: '无畏契约' }

])
const changePrice = () => {
  car.price += 100;
};
const addgame = () => {
  games[0].name = "AAAA"
}
let obj = reactive({ a: { b: { c: 666 } } })

const foo = () => {
  obj.a.b.c = 9999;
}
</script>

<style lang="scss" scoped></style> -->

<!-- <template>
  <div>
    <h2>一辆{{ car.brand }}车,价值{{ car.price }}万</h2>
    <button @click="changePrice">增加</button>

  </div>
  <ul>
    <li v-for="g in games" :key="g.id">{{ g.name }}</li>
  </ul>
  <button @click="addgame">ADDGANES</button>

</template>

<script setup>
import { reactive, ref } from "vue";

let car = ref({
  brand: '奔驰',
  price: 100
});
let obj = reactive({ a: 999 })
console.log(obj

);

console.log(car);

let games = ref([
  { id: '1', name: "王者荣耀" },
  { id: '2', name: '金灿灿' },
  { id: '3', name: '无畏契约' }

])
const changePrice = () => {
  car.value.price += 100;
};
const addgame = () => {
  games[0].name = "AAAA"
}



</script>

<style lang="scss" scoped></style> -->

<!-- <template>
  <div>

    <h2>{{ person.id }} {{ person.name }}</h2>
    <button @click="changeid">改变id的值</button>
    <button @click="changename">改变name的值</button>
    <button @click="changeperson">改变person这个对象 </button>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue"; // 导入ref和reactive函数

let person = ref({ id: 123, name: '张三' })
console.log(person);
const changeid = () => {
  person.value.id = 456
}
const changename = () => {
  person.value.name = 李四
}
const changeperson = () => {
  person.value = { id: 789, name: '王五' }
}
</script>

<style lang="scss" scoped></style> -->

<template>

<h2> 姓名:{{person.name}}</h2>
<h2> 年龄:{{ person.age }}</h2>
<button @click="changeName"></button>
<button @click="changeAge"></button>
  
</template>

<script setup>

</script>

<style lang="css" scoped>

</style>