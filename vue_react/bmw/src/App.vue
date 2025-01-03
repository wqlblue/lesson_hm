<script setup>
import LifecycleComponent from './components/LifecycleComponent.vue';
import { ref } from 'vue';

// option 选项式api -> 组合式 composition api

const count = ref(0);
const showComponent = ref(true); // 
const width = ref(100);

const change = () => {
  width.value += 10;
}

const toggleComponent = () => {
  showComponent.value = !showComponent.value;
}

const incrementCount = () => {
  count.value++;
}

</script>

<template>
  <div>
   <button @click="toggleComponent">Toggle Component</button>
   <button @click="incrementCount">Increment Count</button>
   <p>Count: {{ count }}</p>
  <transition name="fade">
    <LifecycleComponent v-show="showComponent" :count="count"/>
    </transition>
   <div class="box1" :style = "{width:width+'px'}"></div>
   <button @click="change">click</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.box1 {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: width 1s;
}
/* 定义进入和离开的过渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

/* 定义进入前和离开后的状态 */
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>