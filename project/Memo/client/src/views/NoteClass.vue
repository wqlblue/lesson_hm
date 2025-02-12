<template>
    <div class="note-class-wrapper">
        <div class="note-class" :class="{'hide': show}">
            <header>
                <div><van-icon name="wap-nav" @click="showMenu"></van-icon></div>
                <div>
                    <van-icon name="add-o" @click="router.push({path:'/notePublish'})"></van-icon>
                    <van-icon name="star-o"></van-icon>
                    <van-icon name="fire-o"></van-icon>
                </div>
            </header>
            <section>
                <div class="note-item" v-for="(item,index) in noteClassList" 
                :key="index" 
                :style="{ backgroundColor: item.bgColor }" 
                @click="goList(item.title)">
                    <span class="title">{{item.title}}</span>
                </div>
            </section>
        </div>
        <!-- menu -->
        <Menu class="menu" @closeShow="closeMenu" :class="{'show': show}"></Menu>
        
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Menu from '../components/Menu.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
let show = ref(false)
const noteClassList = [
  { bgColor: '#f0aa84', title: '美食' },
  { bgColor: '#dcf189', title: '旅行' },
  { bgColor: '#e0c2f1', title: '恋爱' },
  { bgColor: '#c2ebf1', title: '学习' },
  { bgColor: '#949c9d', title: '吵架' }
]

// 菜单栏弹出
const showMenu = ()=>{
    show.value = true;

}
// 菜单栏取消
const closeMenu = ()=>{
    show.value = false

}
//去到list路由下
 const goList = (title)=>{
    router.push({path:'/list',query:{title}
})
}

</script>

<style lang="css" scoped>

.note-class-wrapper{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .note-class{
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 0.5866rem;
    box-sizing: border-box;
    overflow-y: scroll;
    transform: translateX(0%);
    transition: transform 0.3s;
    &.hide{
      transform: translateX(100%);
    }

    header{
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      align-items: center;
      margin: 10px 0;
      .van-icon{
        font-size: 24px;
        margin: 0 5px;
      }
    }
    section{
      width: 100%;
      .note-item{
        height: 3.2rem;
        border-radius: 0.3rem;
        margin-bottom: 0.64rem;
        box-shadow: 0 0 10px 2px #ccc;
        overflow: hidden;

        .title{
          display: block;
          margin-top: 0.5333rem;
          text-align: center;
          font-size: 0.5333rem;
          color: #fff;
        }
      }
    }
  }
  .menu{
    width: 100%;
    height: 200%;
    position: absolute;
    transform: translateX(-100%);
    transition: all 0.3s;
    &.show{
      transform: translateX(0%);
    }
  }
}
</style>