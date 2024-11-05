<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="minus">-1</button>
    <button @click="add">+1</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
let count = ref(100)
const minus = () => {
  count.value--
}
const add = () => {
  count.value++
}
</script>
<!-- <script>
import { ref } from 'vue'
export default {

  setup() {
    let count = ref(10)

    const minus = () => {
      count.value--
    }
    const add = () => {
      count.value++
      console.log(count);

    }
    return {
      count,
      add,
      minus
    }
  }
}
</script> -->

<!-- <script>
export default {
  data() {
    return {
      count: 2
    }

  },
  methods: {
    minus() {
      this.count--
    },
    add() {
      this.count++
    }
  }

}
</script> -->

<style lang="scss" scoped></style>