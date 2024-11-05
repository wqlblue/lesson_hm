<template>
    <div>
        <h2 @click="happy">{{ count }}</h2>
        <!-- <h3 v-if="count < 30">我很开心</h3>
        <h3 v-else-if="count < 40">我不开心</h3>
        <h3 v-else>我很不开心</h3> -->
        <h4 v-show="count < 30">我很开心</h4>
    </div>
</template>

<script setup>

import { ref } from 'vue'
let count = ref(25)
let happy = () => {
    count.value++

}
</script>

<style lang="scss" scoped></style>