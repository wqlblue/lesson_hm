<template>
    <div>
        <img v-bind:src="pic" alt="">
        <a :href="url">去百度</a>
        <!-- v-bind可以省略 就像v-on可以简写为@ -->
        <!-- <h2 v-on:click="handle" :class="name">周杰伦发专辑了</h2> -->
        <h2 v-on:click="handle" :class="[active ? 'red' : 'green']">周杰伦发专辑了</h2>
        <input type="text" @input="onchange" :value="val">
        <h4 @click="changeval">{{ val }}</h4>
    </div>
    <!-- 三元运算符用 []class="[ active? 'red': 'green' ]"-->
</template>

<script setup>
import { ref } from 'vue'
const url = 'https://www.baidu.com'

const pic = 'https://ts1.cn.mm.bing.net/th/id/R-C.5d8a54b21a4cda8ce4f323976f63dacb?rik=jK70F9t%2feaaEaA&riu=http%3a%2f%2fimg.1ting.com%2fimages%2fspecial%2f36%2fc9007308fc9513954b9fcc49c7a3794a.jpg&ehk=%2bMiXKDgW6dj4t5dSvBs752rEjp81VNuQxUd%2f1AFeLH8%3d&risl=&pid=ImgRaw&r=0'
let active = ref(false)
const handle = () => {
    active.value = !active.value
}
let val = ref('hello')
const onchange = (e) => {
    console.log('on', e.target.value);
    val.value = e.target.value
}

const changeval = () => {
    val.value += '0'
}
</script>

<style lang="css" scoped>
img {
    width: 200px;
}

.red {
    color: red;
}

.green {
    color: green;
}
</style>