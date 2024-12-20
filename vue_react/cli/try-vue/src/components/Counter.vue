<template>
    <div>
        <div>
            <button @click="count++">-</button>
            <span class="color">{{ count }}</span>
            <button @click="increment">+</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 使用 ref 定义 count，并初始化为 0
const count = ref(0);

// 定义 increment 和 decrement 方法
const increment = () => {
    count.value++;
};

const decrement = () => {
    count.value--;
};
</script>

<style lang="css" scoped>
.color {
    color: red;
}
</style>