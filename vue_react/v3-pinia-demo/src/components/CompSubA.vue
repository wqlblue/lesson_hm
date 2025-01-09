<template>
    <div>
        CompsubA
        {{ count  }}

    </div>
</template>

<script setup>
     import {useCounterStore} from '../store/counter'
    import {toRef} from 'vue'
    const counterStore = useCounterStore();    // 本地和中央连接的过程
    const count = toRef(counterStore, 'count')  
    const {increment} = counterStore;
    // 定义方法来调用 store 中的 increment 方法
    function addCount() {
      increment();
    }
</script>

<style lang="scss" scoped>

</style>