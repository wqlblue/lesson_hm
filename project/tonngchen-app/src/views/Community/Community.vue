<template>
    <div class="theAll relative">
        <index v-if="Login" @closePage="handle" class="relative z-5"></index>
        <ChatBot :Login="Login"></ChatBot>
    </div>


</template>

<script setup lang="ts">
import index from './index.vue'
import { ref } from 'vue'
import ChatBot from './ChatBot.vue'
const Login = ref(true)
const checked = ref(true)
const handle = (e) => {
    console.log('接收点击');

    Login.value = e
}
</script>

<style lang="scss" scoped></style>