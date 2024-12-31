<script setup>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppSide from './components/AppAside.vue';
</script>
<template>
  <div>
    <div class="container">
      <AppHeader />
      <div class="flx">
        <AppMain />
        <AppSide />
      </div>
    </div>
  </div>
</template>


<style  scoped>

.flx{
  display: flex;
}

</style>