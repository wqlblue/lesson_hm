<template>
    <div>
        <h2 @click="change">
            {{ msg }}
        </h2>
        <input type="text" v-model="msg">
    </div>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref('hello')
const change = () => {
    msg.value += 0
}
</script>

<style lang="css" scoped></style>