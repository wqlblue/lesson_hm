<template>
    <div class="note-list">
        <span></span>
        <ul>
            <li v-for="item in noteList" :key="item.id" @click="goNoteDetail(item.id)">
                <div class="img">
                    <img :src='item.head_img' alt="">
                </div>
                <div class="time">{{item.c_time}}</div>
                <div class="title">{{ item.title }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useRoute,useRouter } from 'vue-router';
import { onMounted,ref } from 'vue';
import axios from '../http/index.js'
const router = useRouter()
const noteList = ref([])
const route = useRoute()

    // 向后端请求数据  --通过route.query.title
axios.get('/findNoteListByType',{
        params:{
            note_type: route.query.title
        }
}).then(res=>{
    console.log(res);
    noteList.value = res.data
})

// 跳转列表细节页
const goNoteDetail = (id)=>{
    router.push({
        path:'/noteDetail',
        query: {
            id: id
        }
    })
}
console.log(noteList.value); // 打印数据


// 向后端请求数据  --通过route.query.title
</script>

<style lang="less" scoped>
.note-list{
    width: 100%;
    padding:1rem 0.667rem 0;
    //盒子不变大
    box-sizing: border-box;
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap:50px;
        grid-row-gap: 30px;
        li{
            width: 100%;
            height: 4rem;
            border-radius: 0.27rem;
            .img{
                width: 100%;
                height: 4rem;
                border-radius: 0.27rem;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            title{
                margin-top: 5px;
            }
        }
    }
}
</style>