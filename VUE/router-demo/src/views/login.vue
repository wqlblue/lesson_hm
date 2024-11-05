<template>
    <div class="login">
        <div class="login-wrap ">
            <div class="username flex">
                <label>账号:</label>
                <input type="text" v-model="username">
            </div>
            <div class="passward flex">
                <label>密码:</label>
                <input type="text" v-model="passward">
            </div>
            <div class="btn" @click="login">登入
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const username = ref('')
const passward = ref('')
const login = () => {
    if (username.value == 'admin' && passward.value == '123') {
        router.push('/home')
    }

}
</script>

<style lang="css" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, white, skyblue);
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-wrap {
    width: 400px;
    /* border: 1px solid black; */
}

.flex {
    display: flex;
    height: 50px;
    align-items: center;
}

label {
    width: 60px;
}

input {
    flex: 1;
    padding: 5px;
}

.btn {
    width: 80%;
    font-size: 20px;
    padding: 10px 0;
    background-color: black;
    text-align: center;
    color: white;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 100px;
}
</style>