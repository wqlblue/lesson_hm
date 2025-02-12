<template>
    <!-- 测试数据个体 -->
    <div ref="masonryContainer" class="masonry-container bg-gray-100 overflow-hidden border pb-20">
        <div v-for="(item, index) in props.storeData" :key="index" class="masonry-item ">
            <div class=" rounded-xl
            p-2 shadow-md
            ml-2 mr-2  mb-2
            bg-white
            min-h-0
            ">
            <div>
                <img :src="defaultImage" alt="" class="mx-auto w-40 object-contain" v-lazy="item.cover">
            </div>
            <div class="text-center">
                {{ item.name }}
            </div>
            <div v-if="item.discount" class="ml-2 text-red-500 text-sm">立减{{ item.discount
                }}</div>
            <div class="ml-3 flex">
                <div class="price">￥{{ item.price }}</div>
                <div class="sells ml-4 text-xs text-orange-500 items-center justify-center flex">{{ item.sumOfSelling }}人付款</div>
            </div>
        </div>
        </div>
    </div>

   
</template>



<script setup lang="ts">
import type { GoodsItem } from '../types/home.ts'
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import Ico from '../utils/Ico.vue'
interface Props {
    storeData: GoodsItem[];
}
const props = defineProps<Props>()
const defaultImage= 'https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2'

</script>

<style lang="css" scoped>
.masonry-container {
    column-count: 2;
    /* 或根据需要设置列数 */
    column-gap: 20px;
    grid-auto-flow: row dense;
}

.masonry-item {
    break-inside: avoid-column;
    margin-bottom: 20px;
}
</style>