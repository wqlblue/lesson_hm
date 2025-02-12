<template>
    <div class="login">
        <van-notify v-model:show="finReg" type="success">
            <van-icon name="bell" style="margin-right: 4px;" />
            <span>登录成功</span>
        </van-notify>
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="https://pic4.zhimg.com/v2-194b7fd15f75191874379a76bc380e53_r.jpg" alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="nickname" name="nickname" label="昵称" placeholder="昵称"
                        :rules="[{ required: true, message: '请填写昵称' }]" />
                    <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        注册
                    </van-button>
                </div>
            </van-form>
        </div>
        <p class="register" @click="router.push('/login')">已有账号，点击登录</p>
    </div>
</template>

<script setup>
import axios from '../http/index.js';
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const username = ref('')
const password = ref('')
const router = useRouter()
const nickname = ref('')
const finReg = ref('false')
// onMounted(() => {
//     finReg = false
// })
const onSubmit = async (values) => {
    console.log(values);
    const res = await axios.post('/user/login', values)
    console.log(res);
    // if (res.data.code === 800) {
    //     localStorage.setItem('token', res.data.data.token);
    //     setInterval(router.push('/login'), 1500)
    //     finReg.value = true;
    // }

}
</script>

<style lang="less" scoped>
.login {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
}

h1 {
    height: 0.69rem;
    text-align: center;
    font-size: 0.48rem;
    line-height: 0.69rem;
    margin-top: 1.12rem;
}

.login-wrapper {
    width: 7.44rem;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 0 auto;
    margin-top: 1.7rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);

}

.avatar {
    width: 2.4rem;
    height: 2.4rem;
    margin: 1rem auto 0.77rem;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
    }

    padding-bottom: 15px;
}

:deep(.van-field__label) {
    width: 45px;
}

.register {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
}
</style>