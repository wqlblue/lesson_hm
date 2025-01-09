// 全局共享的用户状态
import { defineStore } from 'pinia'

import { ref, reactive } from 'vue'

// hooks 函数式编程
export const useUserStore = defineStore('user', () => {
    // 定义一个响应式的变量
    const isLogin = ref(false)
    const toLogin = () => {
        isLogin.value = true
    }
    const toLogout = () => {
        isLogin.value = false
    }

    // 定义一个响应式的对象
    const userInfo = reactive({
        name: '张三',
        avatar: '', // 头像
        message: 0,
        uid: null
    })
    const setUserInfo = () => {
        userInfo.name = '李四'

    }
    return {
        isLogin,
        toLogin,
        toLogout,
        userInfo,
        setUserInfo
    }
})