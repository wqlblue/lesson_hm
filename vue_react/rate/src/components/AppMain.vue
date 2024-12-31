<template>
    <Main>
        Main
        <h1>你的评分是{{score}}</h1>
        <Rate :value="score" />
        <Item />
        <Item />
    </Main>
</template>

<script setup>

import {ref} from 'vue';
const score = ref(3);
import Item from './Item.vue';
import Rate from './Rate.vue';
</script>

<style lang="css" scoped>
    main{
        flex: 1;
        height: 500px;
        background-color: yellow;
    }
    
</style>    