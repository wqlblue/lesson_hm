<template>
    <div class="login">
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avator">
                <img src="../assets/images/1.jpeg" alt="" />
            </div>
            <!-- vant表单 -->
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
        </div>
        <p class="register" @click="router.push('/register')">新用户？点击这里注册</p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import axios from '@/api'
import { useRouter } from "vue-router";

const username = ref("wn");
const password = ref("123");
const router = useRouter();

const onSubmit = async (values) => {
    //console.log(values);
    //向后端发请求，将账号密码传给后端，进行验证
    const res = await axios.post('/user/login', values);
    localStorage.setItem('userInfo', JSON.stringify(res.data));
    localStorage.setItem('token', res.token);
    router.push('/noteClass');
};

</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    padding: 0 0.3rem;
    background-color: #f2f2f2;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    h1 {
        height: 0.6933rem;
        line-height: 0.6933rem;
        text-align: center;
        font-size: 0.48rem;
        margin-top: 1.12rem;
    }

    .login-wrapper {
        width: 7.44rem;
        border: 1px solid rgba(187, 187, 187, 1);
        margin: 0 auto;
        margin-top: 1.7rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);
        padding-bottom: 15px;

        .avator {
            width: 2.4rem;
            height: 2.4rem;
            margin: 1rem auto 0.77rem;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
            }
        }
    }

    .register {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        color: #999;
    }
}

:deep(.van-field__label) {
    width: 45px;
}
</style>