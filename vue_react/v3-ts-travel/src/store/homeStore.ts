import { defineStore } from 'pinia';
import { ref } from 'vue';
// 假设 HomeTopBarItem 和 recentlyViewedState 已经在 '../types/home' 中定义好
import { HomeTopBarItem, recentlyViewedState } from '../types/home';

export const useHomeStore = defineStore('home', () => {
    // 初始化 topBarState
    const topBarState = ref<HomeTopBarItem[]>([
        { title: '游览', icon: "photo-o" },
        { title: '景点门票', icon: "coupon-o" },
        { title: '酒店', icon: "hotel-o" },
        { title: '交通', icon: "logistics" },
        { title: '租车', icon: "guide-o" }
    ]);

    // 初始化 navBarState
    const navBarState = ref<HomeTopBarItem[]>([
        { title: '首页', icon: "wap-home-o" },
        { title: '搜索', icon: "search" },
        { title: '消息', icon: "chat-o" },
        { title: '个人中心', icon: "manager-o" }
    ]);

    // 填充 recentlyViewedState 根据新的类型定义
    const recentlyViewedStateData = ref<recentlyViewedState[]>([
        {
            cover: 'https://images.unsplash.com/photo-1587268635929-b29f8c400a5b?w=940&t=st=1673655385~exp=1673655985~hmac=3e8e7d7f274d724e6a356683a8d5252957811593c368a2d1494d69757351a5d6',
            title: '西湖风景名胜区',
            price: 120
        },
        {
            cover: 'https://images.unsplash.com/photo-1527854207111-a2dec7046a42?w=940&t=st=1673655385~exp=1673655985~hmac=65e4a870d33f4a393a3c766b184f9d658f83f9c58f6834c43621d6f6c5995d4a',
            title: '东方明珠广播电视塔',
            price: 180
        },
        {
            cover: 'https://images.unsplash.com/photo-1517431492827-f482b8cda136?w=940&t=st=1673655385~exp=1673655985~hmac=6368d624d6357e6d245b197f7a849e9b1a3f9b593b64191f4f24d4151f665795',
            title: '故宫博物院',
            price: 60
        },
        {
            cover: 'https://images.unsplash.com/photo-1506803682981-6e719aef555e?w=940&t=st=1673655385~exp=1673655985~hmac=e9919f225b1b942f61f616b8548455a8b4c47e81f881e08d81a3b86a430d5d4e',
            title: '长城',
            price: 50
        }
    ]);

    return {
        topBarState,
        navBarState,
        recentlyViewedState: recentlyViewedStateData // 返回最近浏览的状态
    };
});