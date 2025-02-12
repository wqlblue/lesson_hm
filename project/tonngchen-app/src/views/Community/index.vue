<template>
    <div class="bgImage w-screen h-screen relative bg-gray-100 ">
        <div class="text-2xl absolute top-[30%] left-[20%] text-pink-300">小货：你的私人购物顾问！</div>
        <div class="">
            <div class="rotating-box z-10 absolute top-[40%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-md shadow-lg mb-10"></div>
        </div>
        <div class="absolute top-[60%] left-[40%] ">
            <button @click="closing">进入咨询</button>
        </div>
    </div>

</template>

<script setup>
// 让animation滑入
import { ref } from 'vue'
const emits = defineEmits(['closePage'])
const closing = ()=>{
    console.log('点击');
    
    emits('closePage',false)
}
// 让图片��转
const shouldRotate = ref(false)
const toggleRotation = () => {
    shouldRotate.value = !shouldRotate.value;
}
</script>

<style lang="css" scoped>
/* 旋转体 */
.bgImage {
    background-image: url('https://bpic.588ku.com/back_our/20211024/bg/fc4a09f486323a0b4c58d536638a47ba_120875.png!/fw/400/quality/100/unsharp/true/compress/true');
}

.rotating-box {
    width: 100px;
    height: 100px;
    background-color: rgb(23, 226, 152);
    animation: spin 3s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg)scale(1);
        
    }

    to {
        transform: rotate(360deg)scale(1.1);
        
    }
}

/* 确认框 */
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
</style>