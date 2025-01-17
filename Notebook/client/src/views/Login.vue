<template>
    <div class="login">
        <h1>登录 </h1>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="https://cn.bing.com/images/search?view=detailV2&ccid=WJCsOXyw&id=903088959D723CE37CB70265543585CBB7C1BC0C&thid=OIP.WJCsOXywBF5WOIXMBfI4XAHaE7&mediaurl=https%3a%2f%2fimg.haote.com%2fupload%2f20160606%2f2016060614652068163.jpg&exph=426&expw=640&q=%e5%b0%8f%e7%ba%a2%e4%b9%a6&simid=607999514177644179&FORM=IRPRST&ck=6EC54440353BA2FF7F28E25C15A6C181&selectedIndex=8&itb=0" alt="">

            </div>
            <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>

        </div>
        <p class="register">
            新用户？点击这里注册
        </p>
    </div>
</template>

<script setup>
import axios from '../api/index';
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const onSubmit = async (values) => {
    console.log(values);  // 向后端发送请求 将账号密码传给后端
    // console.log(username.value);
    // console.log(password.value);
    const res = await axios.post('/user/login',{
        username:values.username,
        password:values.password
    })
    console.log(res);
    
}



</script>

<style lang="less" scoped>

.login{
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    h1{
        height: 0.6933rem;
        font-size: 0.48rem;
        text-align: center;
        line-height: 0.6933rem;
        margin-top: 1.12rem;
    }
    .login-wrapper{
        width:7.44rem;
        border:1px solid rgba(187,187,187,1);
        margin: 0 auto;
        margin-top: 1.7rem;
        border-radius: 0.3rem;
        box-shadow: 0 0  0.533rem 0 rgab(170,170,170,1);
        padding-bottom: 15px;
        .avatar{
            width: 2.4rem;
            height: 2.4rem;
            margin: 1rem auto 0.77rem ;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
    }
    .register{
        position:absolute;
        bottom:30px;
        left:50%;
        transform:translateX(-50%);

    }
}
:deep(.van-field__label) {
    width: 45px;
}

</style>