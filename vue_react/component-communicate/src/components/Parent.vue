<template>
    <div>
        <Child ref="comp" />
        <button @click="handleClick">按钮</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
let comp = ref(null)
const title = ref('hello')

const handleClick = () => {
    console.log(comp) // 标记DOM 元素 null 组件没有挂载，dom也不在
    console.log(title); // 标记数据
}
</script>

<style lang="scss" scoped></style>