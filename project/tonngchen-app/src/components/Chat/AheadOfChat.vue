<template>
    <div class="container mx-auto px-4 py-8 relative">

        <p class="text-center text-gray-600 mb-8">你可以从以下话题开始与我对话，换一换</p>
        <TransitionFromButton >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-gray-200 rounded-lg shadow-md p-4 ">
                    <h3 class="text-xl font-semibold mb-2">场景推荐</h3>
                    <ul class="list-disc ml-6 mb-4">
                        <li>母亲节应该送些什么礼物...</li>
                        <li>七夕应该送女朋友什么礼物...</li>
                        <li>同学过生日应该买些什么...</li>
                    </ul>
                </div>

                <!-- 其他话题卡... -->

                <div class="bg-gray-200 rounded-lg shadow-md p-4">
                    <h3 class="text-xl font-semibold mb-2">需求推荐</h3>
                    <ul class="list-disc ml-6 mb-4">
                        <li>推荐预算600-800的后卫球鞋...</li>
                        <li>适合夏天穿的短袖...</li>
                        <li>nike新出的板鞋...</li>
                    </ul>
                </div>

                <div class="bg-gray-200 rounded-lg shadow-md p-4">
                    <h3 class="text-xl font-semibold mb-2">品牌推荐</h3>
                    <ul class="list-disc ml-6 mb-4">
                        <li>好评率高的运动品牌有哪些...</li>
                        <li>高端的奢侈品牌有哪些...</li>
                        <li>...</li>
                    </ul>
                </div>
            </div>
        </TransitionFromButton>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';
import TransitionFromButton from '@/utils/TransitionFromButton.vue';
const value = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => showToast('取消');

</script>

<style lang="css" scoped></style>