<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/community">
            <span>AI咨询</span>
            <template #icon="props">
                <img :src="props.active ? icon.active : icon.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item icon="star-o" to="/discount">好价</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/identify" badge="5">鉴别</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/my" dot>我的</van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const active = ref<number>(0)
// 路由与tabBar的对应关系
const routeActive = [
    { path: '/home', nums: 0 },
    { path: '/community', nums: 1 },
    { path: '/discount', nums: 2 },
    { path: '/identify', nums: 3 },
    { path: '/my', nums: 4 },
]

const route = useRoute() // 获取当前路由信息
// 在页面刷新后，不丢失tabBar所在位置
onMounted(() => {
    for (let i = 0; i < routeActive.length; i++) {
        if (routeActive[i].path === route.path) {
            active.value = routeActive[i].nums
        }
    }
})

const icon = {
  active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
  inactive: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
}
</script>

<style lang="css" scoped></style>