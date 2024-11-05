<template>
    <div>
        <h2>Home page</h2>
        <button @click="gohot">去沸点</button>
    </div>
</template>

<script setup>
// import router from '../router'  //找文件夹很麻烦

import { useRouter } from 'vue-router'
const router = useRouter()


const gohot = () => {
    // router.push('/hot')
    // router.replace('/bot')
    router.push({
        name: 'hot',

        params: {
            id: 123
        }
    })
    // 浏览器天生会生成一个栈
}
</script>

<style lang="scss" scoped></style>