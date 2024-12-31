<template>
   <header>
    <nav>
        <ul>
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
        </ul>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped> 
  header{
    height : 100px;
    background-color: lightcyan;
  }
</style>
<!-- scoped 是 Vue 单文件组件中 <style> 标签的一个属性，用于确保样式仅应用于当前组件的模板内容。
 它通过在编译时为组件内的元素添加唯一的属性来实现样式的局部作用域，从而避免样式污染全局或其他组件。 -->