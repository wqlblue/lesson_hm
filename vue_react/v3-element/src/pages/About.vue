<template>
  <div>
    About
  </div>
</template>

<script setup>
  // 快，以最快的速度让用户看到页面
  import {onMounted} from 'vue'
  import {getUserInfo}  from '../api/index'
  onMounted(()=>{
    const getUserInfoCb = async () => {
      const res = await getUserInfo()
      console.log(res);
    }
    getUserInfoCb()
})
</script>

<style scoped>

</style>