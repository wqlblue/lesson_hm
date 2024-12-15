<template>
  <div>
    <h1>Hello,vue</h1>
    <p>this is vue </p>
  </div>
</template>
<script>
    export default{

    }

</script>
<!-- scoped保证了这个样式只会应用到这个组件的元素中，不会影响全局或其他组件 -->
<style scoped> 
    h1{
        color:red;
    }
</style>