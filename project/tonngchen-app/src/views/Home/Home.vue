<template>
   <div class="home">
      <div class="top-bg absolute h-24 -z-10 w-screen 
        bg-gradient-to-b from-pink-300 to-orange-300">
      </div>
      <!-- 头部 -->
      <div
         class="text-red-500 text-2xl font-bold  leading-tight tracking-tighter sm:text-3xl md:text-6xl pt-3 relative">
         识货<span class="pl-10 text-base text-black tracking-normal ">实物鉴别 严选正品优质店铺</span>
         <van-icon name="arrow" class="text-gray-500 items-center text-base"></van-icon>
         <van-search v-model="searchField" placeholder="请输入搜索关键字" show-action shape="round" background="transparent"
            class="mb-0.75 text-light">
            <template #action>
               <div class="">
                  <van-icon name="shopping-cart-o" size="1.25rem"></van-icon>
               </div>
            </template>
         </van-search>

         <div class="absolute -top-2 left-8  text-black p-4 text-base ">App</div>



      </div>
      <main class="flex flex-col space-y-4">
         <header class="
            w-[calc(100vw-2rem)]
            h-30 bg-white rounded-2xl 
            p-2 shadow-md self-center">
            <section
               class="grid grid-cols-5 grid-rows-2 gap-4 overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth overflow-hidden-x">
               <div class="" v-for="item in classOfGoods" :key="item.title">
                  <div class="">
                     <!-- <van-icon :name="item.icon" size="2rem"></van-icon> -->
                     <Ico :name="item.icon"></Ico>
                  </div>
                  <div class="topbar-item__text text-xs text-center">
                     <div>{{ item.title }}</div>
                     
                  </div>
               </div>
            </section>
         </header>
         <div class="
            w-[calc(100vw-2rem)]
            h-30 bg-pink-100 rounded-2xl 
            p-2 shadow-md self-center">
            <section
               class="grid grid-cols-4 grid-rows-1 gap-4">
               <div class="border border-2  border-blue-500 rounded-lg " v-for="item in messageOfGoods" :key="item.title">
                  <div class="">
                     <!-- <van-icon :name="item.icon" size="2rem"></van-icon> -->
                     <Ico :name="item.icon"></Ico>
                     
                  </div>
                  <div class="topbar-item__text text-xs text-center">
                     <div>{{ item.title }}</div>
                     
                  </div>
               </div>
            </section>
         </div>

         <!-- 商品瀑布流 -->
         <StoreWaterFall :storeData="Goods"></StoreWaterFall>
      </main>
      <div class="">

      </div>

   </div>
   <i class="icon-jiahao"></i>
</template>

<script setup lang="ts">
import { useHomeStore } from '../../store/home.ts';
import { toRefs, ref } from 'vue';
import Ico from '../../utils/Ico.vue'
import StoreWaterFall from '../../components/Store/StoreWaterFall.vue'
const homeStore = useHomeStore()
const {
   classOfGoods,
   messageOfGoods,
   Goods,
} = toRefs(homeStore)
console.log(classOfGoods.value);

</script>

<style lang="scss" scoped></style>