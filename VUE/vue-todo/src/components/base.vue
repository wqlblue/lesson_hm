<template>
    <div>
        <h2>{{ temp }}</h2>
        <h5>{{ suggest }}</h5>
        <button @click="add">+1</button>
        <button @click="minus">-1</button>
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

// 创建响应式的温度变量 temp，初始值为 20
const temp = ref(50);

// 创建响应式的建议变量 suggest，初始值为'夹克'
// const suggest = ref('夹克');

// 增加温度的函数
const add = () => {
    temp.value += 5;

};

// 减少温度的函数
const minus = () => {
    temp.value -= 5;
};
//用到computed 不用去提前声明变量 
const suggest = computed(() => {
    if (temp.value >= 30) {
        return '短袖'
    }
    else if (temp >= 20)
        return '夹克'
    else if (temp.value >= 10)
        return '棉服'
    else
        return '羽绒服'

})
// 监听 temp 的变化，在变化时执行回调函数
// watch(temp, (newValue, oldValue) => {
//     console.log(`温度从${oldValue}变为${newValue}`);
//     // 可以根据需要在此处添加更多关于温度变化的处理逻辑
//     if (temp.value >= 30) {
//         suggest.value = '短袖';
//     }
//     else if (temp >= 20)
//         suggest.value = '夹克'
//     else if (temp.value >= 10)
//         suggest.value = '棉服'
//     else suggest.value = '羽绒服'
// }, { immediate: true })    
</script>

<style lang="css" scoped>
/* 在这里添加你的样式规则，例如 */
div {
    margin: 20px;
}
</style>