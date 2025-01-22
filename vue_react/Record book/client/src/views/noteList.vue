<template>
    <div class="note-list">
        <ul>
            <li v-for="item in noteList" :key="item.id" @click="goNoteDetail(item.id)">
                <div class="img">
                    <img :src="item.head_img" alt="">
                </div>
                <div class="time">{{ item.m_time }}</div>
                <div class="title">{{ item.title }}</div>
            </li>

        </ul>
    </div>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
import axios from '@/api/index.js';
import { ref } from 'vue';

const router = useRouter();
const route = useRoute();
const noteList = ref([]);

axios.get('/findNoteListByType', {
    params: {
        note_type: route.params.title
    }
}).then(res => {
    // console.log(res.data);
    noteList.value = res.data;
})

function goNoteDetail(id) {
    router.push({
        name: 'noteDetail',
        params: {
            id
        }
    });
}
</script>

<style lang="less" scoped>
.note-list {
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 50px;
        grid-row-gap: 30px;

        li {
            font-size: 0.37rem;

            .img {
                width: 100%;
                height: 4rem;
                border-radius: 0.27rem;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .title {
                margin-top: 5px;
            }
        }
    }
}
</style>