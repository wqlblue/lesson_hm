<template>
    <div>
      <h2>CompB</h2>
      <p>count: {{count }}</p>
      <button @click="addCount">Add</button>
      <CompsubA />
    </div>
  </template>
  
  <script setup>
  // 引入中央模块
    import CompsubA from './CompsubA.vue';
    import {toRef} from 'vue'
    import {useCounterStore} from '../store/counter'
    const counterStore = useCounterStore();
    const count = toRef(counterStore, 'count')
    const {increment} = counterStore;
    // 定义方法来调用 store 中的 increment 方法
    function addCount() {
      increment();
    }
  </script>
  
  <style scoped>
  
  </style>