<template>
    <div class="home">
        <div class="header">
            <div class="title">旅梦后台管理</div>
            <div class="uerinfo">欢迎admin</div>
        </div>
        <section class="body">
            <aside class="menu">
                <ul>
                    <li class="menu-item" v-for="( item, index) in menu" :key="item.id">
                        <RouterLink :to="item.path">{{ item.name }}</RouterLink>
                    </li>

                </ul>
            </aside>
            <main class="main">
                <RouterView></RouterView>
            </main>
        </section>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const menu = ref([
    { id: 1, name: '班级管理', path: "/class" },
    { id: 2, name: '讲师列表', path: "/teacher" },
    { id: 3, name: '就业统计', path: "/job" }
])
</script>

<style lang="css" scoped>
.header {
    display: flex;
    height: 70px;
    color: blue;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    padding: 0 30px;
    background-image: linear-gradient(to bottom, white, skyblue);
}

.body {
    display: flex;
    height: calc(100vh - 70px);
}

.menu {
    width: 180px;
    background-image: linear-gradient(to bottom, white, skyblue);
}

.menu-item {
    height: 50px;

}

.menu-item a {
    color: black;
    font-size: 18px;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 50px;
}

.menu-item a:hover {
    background-color: aqua;
}
</style>