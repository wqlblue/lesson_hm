  <template>
    <nav>
      <span @click="changetab(1)">基础知识</span>|
      <span @click="changetab(2)">购物车</span>|
      <span @click="changetab(3)">待办事项</span>
    </nav>

    <Base v-if="state.index === 1" />
    <shopping v-if="state.index === 2" />
    <todo v-if="state.index === 3" />
  </template>

<script setup>
import { reactive } from 'vue'
import Base from './components/base.vue'
import shopping from './components/shopping.vue'
import todo from './components/todo.vue'
let state = reactive({
  index: 1
})
const changetab = (i) => {
  console.log(i);
  state.index = i
}
</script>

<style lang="css">
* {
  text-align: center;
}
</style>