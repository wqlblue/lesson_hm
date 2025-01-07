<template>
    <div>
        <div>PostShow {{ postId }}</div>
    </div>
    <hr>
    <router-view />
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";


const route = useRoute();  //当前路由
console.log(route);
const { postId } = route.params;
console.log(postId);




</script>

<style lang="scss" scoped></style>