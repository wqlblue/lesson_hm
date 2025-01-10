<template>
    <div>
      <h1>{{ msg }}</h1>
      <button @click="login">登录</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        msg: '请登录'
      }
    },
    methods: {
      login() {
        localStorage.setItem('token', 'your-auth-token');
        const redirectPath = this.$route.query.redirect || '/';
        this.$router.push(redirectPath);
      }
    }
  }
  </script>