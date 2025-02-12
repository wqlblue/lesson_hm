import { defineStore } from 'pinia'
//关键数据要限制类型
import { ref } from 'vue'
import type {ClassOfGoodsItem,MessageItem,GoodsItem} from '../types/home'

//定义store
export const useHomeStore = defineStore('home',()=>{
    // 货物分类
    const classOfGoods = ref<ClassOfGoodsItem[]>([
        {
            title:"鞋类",
            icon:"icon-AJ-6"
        },
        {
            title: "服饰",
            icon: "icon-tubiaozhizuomobanzuizhong-",
          },
          {
            title: "手机数码",
            icon: "icon-shouji",
          },
          {
            title: "美妆",
            icon: "icon-meizhuang",
          },
          {
            title: "外卖餐饮",
            icon: "icon-waimai",
          },
          {
            title: "个户清洁",
            icon: "icon-ximiannai",
          },{
            title: "首饰配件",
            icon: "icon-xianglian",
          },{
            title: "食品饮料",
            icon: "icon-leshishupian",
          },{
            title: "营养保健",
            icon: "icon-baojianpin",
          },{
            title: "日用百货",
            icon: "icon-riyongbaihuo",
          },

    ])
    // 信息栏
    const messageOfGoods = ref<MessageItem[]>([
        {
            title: "识货排行",
            icon: "icon-paihangbang",
          },
          {
            title: "百亿补贴",
            icon: "icon-butie",
          },
          {
            title: "赚钱情报",
            icon: "icon-wajueqingbao",
          },
          {
            title: "查历史价",
            icon: "icon-lishi",
          },
    ])
    const Goods = ref<GoodsItem[]>([
        {
            name: "dunk-high-50-years",
            cover:
              "https://sneakernews.com/wp-content/uploads/2023/02/nike-dunk-high-50-years-of-hip-hop-DV7216-001.jpg",
            price: 173,
            discount:20,
            sumOfSelling:1172
          },
          {
            name: "Air force 1",
            cover:
              "https://images.lifestyleasia.com/wp-content/uploads/sites/3/2023/02/01132522/tiffany-and-nike-1600x900.jpeg?tr=w-1600",
            price: 173,
            discount:20,
            sumOfSelling:1172
          },
          {
            name: "Old BeiJing",
            cover:
              "https://tse1-mm.cn.bing.net/th/id/OIP-C.lgDNH8uOiy_A5Hcz8ZA8-AHaJE?rs=1&pid=ImgDetMain",
            price: 173,
            discount:20,
            sumOfSelling:1172
          },
          {
            name: "巴黎世家短袖",
            cover:
              "https://tse4-mm.cn.bing.net/th/id/OIP-C.At93kCAS4Pn2I1qCCcbBagHaHa?rs=1&pid=ImgDetMain",
            price: 173,
            sumOfSelling:1172
          },
          {
            name: "Gucci柳丁女士包包",
            cover:
              "https://tse2-mm.cn.bing.net/th/id/OIP-C.WOmtDlpqCGqBJkgl6MU-IAHaHa?rs=1&pid=ImgDetMain",
            price: 173,
            sumOfSelling:1172
          },
          {
            name: "圣罗兰YSL包包",
            cover:
              "https://tse4-mm.cn.bing.net/th/id/OIP-C.UdjCHluLC91YXu6PXr7yBgHaHa?rs=1&pid=ImgDetMain",
            price: 173,
            sumOfSelling:1172
          },
          {
            name: "勇士维金斯球衣",
            cover:
              "https://tse3-mm.cn.bing.net/th/id/OIP-C.LNZh7XNEFH_st4QV4KSiggHaHa?rs=1&pid=ImgDetMain",
            price: 173,
            sumOfSelling:1172
          },
          {
            name: "CIGA LONG",
            cover:
              "https://img.zcool.cn/community/0192b55d761f75a8012060be7a2dd5.jpg@1280w_1l_2o_100sh.jpg",
            price: 173,
            sumOfSelling:1172
          },
          {
            name: "李宁大背包",
            cover:
              "https://img12.360buyimg.com/n1/jfs/t1/124376/39/3964/81012/5ed7766aE5659b37b/1e3476383d8d1474.jpg",
            price: 173,
            sumOfSelling:1172
          },
          {
            name: "CBA官方用球",
            cover:
              "https://img13.360buyimg.com/n0/jfs/t1/28585/34/18710/444798/62ea647fE0e19c780/cdf518bc1d0e5a56.png",
            price: 173,
            sumOfSelling:1172
          },
          {
            name: "英格兰鲨鱼皮豆豆鞋",
            cover:
              "https://ts1.cn.mm.bing.net/th/id/R-C.49b1b2e4568d715beb66523466219c3c?rik=MiDi2ys4D2oesg&riu=http%3a%2f%2fm.360buyimg.com%2fn12%2fjfs%2ft1435%2f67%2f1270174038%2f236497%2f8a534dca%2f55c1d52aN79930f4f.jpg!q70.jpg&ehk=wERoUeTchLUCTBd9v6CYOW%2bEiaFUODLVxVxL9GXbM5E%3d&risl=&pid=ImgRaw&r=0",
            price: 173,
            sumOfSelling:1172
          },
          {
            name: "Nike Air Force 1",
            cover:
              "https://tse1-mm.cn.bing.net/th/id/OIP-C.L6bvxRetmROgxwacPD73LwHaE8?rs=1&pid=ImgDetMain",
            price: 173,
            sumOfSelling:1172
          },
          {
            name: "夏天运动短裤",
            cover:
              "https://cbu01.alicdn.com/img/ibank/2017/449/864/4345468944_81229477.jpg",
            price: 173,
            sumOfSelling:1172
          },
          {
            name: "海洋之心",
            cover:
              "https://cbu01.alicdn.com/img/ibank/2018/027/541/9231145720_109652400.jpg",
            price: 173,
            sumOfSelling:1172
          },
          {
            name: "Nike Air Force 1",
            cover:
              "https://tse1-mm.cn.bing.net/th/id/OIP-C.L6bvxRetmROgxwacPD73LwHaE8?rs=1&pid=ImgDetMain",
            price: 173,
            sumOfSelling:1172
          },
    ])
    return {
        classOfGoods,
        messageOfGoods,
        Goods,
    }
})