<template>
    <div>
       {{rate }} 
    </div>
</template>

<script setup>
    import { defineProps,ref,computed } from 'vue';
    let count = ref(0); // 组件自有的响应式数据
    // 子组件和父组件不一定是一值绑定的，哪里要用往哪搬
    // 定义props 业务 消费数据，不是自身的数据，而和父组件绑定
    // 告诉外界，我需要一个什么类型的数据

    // 参数数据，外界传入的，不是自有的
let props = defineProps({
  value: Number
})
let rate = computed(() => {
  return "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
})

</script>

<style lang="scss" scoped>

</style>