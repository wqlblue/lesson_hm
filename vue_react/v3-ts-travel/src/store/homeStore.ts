import { defineStore } from 'pinia'

// 关键数据要限制类型
import { ref } from 'vue'


export const useHomeStore = defineStore('home', () => {
    const topBarState = ref([
        {
            title: '游览',
            icon: "photo-o"
        },
        {
            title: '景点门票',
            icon: "coupon-o"
        },
        {
            title: '酒店',
            icon: "hotel-o"
        },
        {
            title: '交通',
            icon: "logistics-o"
        },
        {
            title: '租车',
            icon: "guide-o"
        }
    ])
    return {
        topBarState
    }
})