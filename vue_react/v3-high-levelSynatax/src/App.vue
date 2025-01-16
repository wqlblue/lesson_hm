<script setup>
import DeepWatchExample from './components/DeepWatchExample.vue';
import BaseCard from './components/BaseCard.vue';
import Layout from './components/Layout.vue';

import { 
  ref,
  watch,
  watchEffect
} from 'vue';

// 定义响应式变量 num 和 count
const num = ref(100);
function incrementNum() {
  num.value++;
}

const count = ref(0);
function increment() {
  count.value++;
}

// 使用 watch 监听 count 的变化
watch(count, (newValue, oldValue) => {
  if (newValue % 2 === 0) {
    console.log('偶数');
  } else {
    console.log('奇数');
  }
}, {
  immediate: true // 立即执行一次监听回调
});

// 使用 watchEffect 自动追踪响应式依赖
watchEffect(() => {
  console.log(`当前count的值是:${count.value + num.value}`);
});
</script>

<template>
  <div>
    <DeepWatchExample />
    <p>计数器：{{ count }}</p>
    <button @click="increment">增加</button>

    <p>计数器二：{{ num }}</p>
    <button @click="incrementNum">增加2</button>

    <BaseCard>
      <p>这里是默认插槽的内容，父组件slot形式传入， 提升组件的定制性</p>
    </BaseCard>

    <Layout>
      <template #header>
        <h1>这里是头部内容，由父组件决定</h1>
      </template>
    </Layout>
  </div>
</template>

<style scoped>
/* 可以在这里添加样式 */
</style>