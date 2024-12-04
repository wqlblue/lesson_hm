<template>
  <div>
    <Header />
  </div>
</template>

<script setup>
import Header from './components/header/index.vue'

import { getSeller } from '@/api';

getSeller().then(res=>{
  console.log(res);
})
</script>

<style lang="scss" scoped>

</style>