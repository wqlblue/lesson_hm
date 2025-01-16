import { defineStore } from 'pinia';
import { ref } from 'vue';
// 假设 HomeTopBarItem 和 recentlyViewedState 已经在 '../types/home' 中定义好
import { HomeTopBarItem, recentlyViewItem } from '../types/home';

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
    const recentlyViewedStateData = ref<recentlyViewItem[]>([
        {
            cover: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg',
            title: '西湖风景名胜区',
            price: 120
        },
        {
            cover: 'https://images.pexels.com/photos/1029614/pexels-photo-1029614.jpeg',
            title: '东方明珠广播电视塔',
            price: 180
        },
        {
            cover: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
            title: '故宫博物院',
            price: 60
        },
        {
            cover: 'https://images.pexels.com/photos/2422268/pexels-photo-2422268.jpeg',
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