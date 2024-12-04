<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                    <img src="./1.webp" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">南昌面馆</span>
                </div>
                <div class="description">
                    飞鸟转送/10分钟送达
                </div>
                <div class="support">
                    <!-- pic -->
                     <SupportIcon  type="2" size="1" />
                     <span class="text">在线支付满20-19</span>
                </div>
           
            </div>
            <div class="support-count">
                   
                   <span class="count">3个</span>
                   <i class="iconfont icon-youjiantou"></i>
               </div>
        </div>
        <div class="bulletion-wrapper">
        <span class="bulletion-title"></span>
        <span class="bulletion-text">公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告</span>
        <i class="iconfont icon-youjiantou"></i>
            <div class="bg" :style="{ backgroundImage: `url(${bgImage })` }"></div>
    </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import SupportIcon from '@/components/support-icon/Index.vue'

import bgImage from './1.webp'
const bg = ref(bgImage);


</script>

<style lang="less" scoped>
@import '@/assets/variable.less';
@import '@/assets/mixin.less';
.header{
    color: @color-white;
    position: relative;
    background-color: @color-background-ss;
    .content-wrapper{
        display: flex;
        padding: 24px 12px 18px 24px;
        position: relative;
        .avatar{
            border-radius: 3px;
            width: 64px;
            height: 64px;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .content{
            flex:1;
            margin-left: 16px;
       
            .title{
                margin-bottom: 8px;
                display: flex;
                align-items: flex-end;
                .brand{
                display: inline-block;
                width: 30px;
                height: 18px;    
                // background-image: url(./brand@2x.png)      
                .bg-image('brand');
                background-size: 100% 100%;      
            }
            .name{
                font-size: @fontsize-large;
                font-weight: bold;
                margin-left: 6px;
            }
            }
            .description{
                font-size: @fontsize-small;
               margin-bottom: 8px;
            }
            .support{
                display: flex;
                align-items: center;
               .text{
                    font-size: @fontsize-small-s;
                    margin-left: 4px;
                }
            }
       
        }
        .support-count{
                position: absolute;
                right: 12px;
                bottom: 14px;
                height: 24px;
                line-height: 24px;
                background-color: @color-background-sss;
                border-radius: 14px;
                padding: 0 8px;
                display: flex;
                align-items: center;
                .count{
                    font-size: @fontsize-small-s;
                }
                .iconfont{
                    font-size: @fontsize-small-s;
                    margin-left: 2px;
                }
            }
    }
    .bulletion-wrapper{
        display: flex;
        align-items: center;
        padding: 0 8px;
        height: 28px;
        background-color: @color-background-sss;
      .bulletion-title{
            flex: 0 0 22px;
            height: 12px;
           .bg-image('bulletin');
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    .bulletion-text{
            flex: 1;
            font-size: @fontsize-small-s;
            margin-left: 6px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .icon-youjiantou{
            font-size: 8px;
            flex: 0 0 10px;
        }
    }
    .bg {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: v-bind(bg) ;
    background-size: 100% 100%;
    z-index: -1;
    filter: blur(10px);
  } 
}
</style>