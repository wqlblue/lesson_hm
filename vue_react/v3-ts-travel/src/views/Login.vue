<template>
    <div className="w-screen h-screen">
            <van-nav-bar left-arrow>
                <template #right>
                    <span class="text-xs text-gray-400">遇到问题</span>
                </template>
        </van-nav-bar>
        <div class="text-2xl font-bold text-center my-10">登录</div>
        <van-form @submit="onSubmit" model="params">
            <van-cell-group inset>
                <van-field
                v-model="params.username"
                name="username"
                label="用户名"
                placeholder="请输入用户名"
                :rules="[{ required: true, message: '请输入用户名' }]"
                ></van-field>
            </van-cell-group>

            <van-cell-group inset>
                <van-field
                v-model="params.password"
                name="password"
                label="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请输入密码' }]"
                type="password"
                ></van-field>
            </van-cell-group>
            <div style="mt-4">
                <van-button block color="#d2d2d2" native-type="submit">登入</van-button>
            </div>
            <div class="text-center" @click="toRegister">
                没有账号,点击注册
            </div>
            <span class="text-ms ml-4 text-[#e6723c]">请先同意必选条款</span>
            <van-field name="checkbox"> 
                <template #input>
                    <van-checkbox v-model="checked" shape="square">
                        <span class="text-xs ml-2">
                            我已阅读并同意 <a href="#">《用户协议》</a>和<a href="#">《使用条款》</a>
                        </span>
                    </van-checkbox>
                </template>
            </van-field>
        </van-form>
    </div>
</template>

<script setup lang="ts">
// vant 表单 验证
// ts 类型约束
// 记住我 
// 就这个地方用了 没必要
// interface 接口 约束
// type 
import { reactive,ref } from 'vue';




interface LoginInfo {
    username: string;
    password: string;
}


const params = reactive<LoginInfo>({
    username: '',
    password: '',
});
const checked = ref<boolean>(false);

import { useRouter } from 'vue-router';
const router = useRouter();
const toRegister = () => {
    router.push('/register');
};
const onSubmit = () => {
    console.log(params);
};
</script>

<style scoped>
:deep(.van-icon-arrow-left) {
    @apply text-2xl text-black;
} 
:deep(.van-checkbox__icon--checked .van-icon) {
    @apply bg-[#e6723c] border-[#e6723c];
 }  
</style>