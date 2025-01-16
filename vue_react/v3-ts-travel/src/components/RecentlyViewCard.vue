<template>
    <div>
        <div id="item-wrapper" class="flex space-x-2 w-screen overflow-scroll px-4">
            <div
                class="item flex-[0_0_auto] w-28 space-y-2"
                v-for="(item, index) in items"
                :key="item.title"
            >       
                <div class="item-image">
                    <img :src="item.cover" :alt="item.title" class="rounded-lg" />
                </div>
                <div class="item-info">
                    <div class="item-name text-xs font-bold">{{ item.title }}</div>
                    <div class="item-price text-xs font-bold">{{ getCurrency(item.price) }}</div>
                </div>
            </div>
        </div>
    </div>
</template> 
<script setup lang="ts">
import type { recentlyViewItem } from '../types/home';
import {getCurrency} from '../utils/utils'
// ts 比 js 复杂
// 数据  

interface Props {
   items:recentlyViewItem[]
}

defineProps<Props>()
</script>

<style lang="scss" scoped>

</style>