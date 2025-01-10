<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于我们</router-link>
      <router-link to="/login">登录</router-link>
    </nav>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 示例样式 */
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}

nav a.router-link-exact-active {
  color: red;
}
</style>