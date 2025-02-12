<template>
    <div class="container relative">
       <header>
            <div class="chatName">
                <h2 class="text-center text-3xl font-bold mb-4">通情、达义，你的全能AI助手</h2>
            </div>
       </header>
       <main>
            <AheadOfChat v-if="first"></AheadOfChat>
            <Dialogue v-if="!first" >111111</Dialogue>
       </main>
       <footer class="fixed bottom-10 left-0 right-0" v-if="!props.Login">
        <van-form @submit="onSubmit" class="w-screen">
                <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel"
                    shape="round" class="h-20 rounded" name="search">
                    <template #action>
                        <div @click="onClickButton">搜索</div>
                    </template>
                </van-search>
        </van-form>
       </footer>
    </div>
</template>

<script setup>
import AheadOfChat from "@/components/Chat/AheadOfChat.vue"
import Dialogue from "@/components/Chat/Dialogue.vue"
import { ref } from 'vue'
import { showToast } from 'vant';
const props = defineProps({
    Login: {
        type: Boolean,
        default: false,
    }
})
const first = ref(true)
const value = ref('');
const onSearch = (val) => {
    showToast(val);
    value.value = ''
    first.value = false;
}
const onClickButton = () =>{
    onSearch(value.value)
} 
</script>

<style lang="css" scoped>
.van-search {
    --van-search-background: #7b7878;
    --van-search-input-height: 40px;
}
</style>