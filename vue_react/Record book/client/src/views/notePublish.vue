<template>
    <div class="note-publish">
        <div class="editor">
            <QuillEditor theme="snow" v-model:content="state.content" placeholder="请输入笔记内容" contentType="html" />
        </div>
        <div class="note-wrap">
            <div class="note-cell">
                <van-field v-model="state.title" label="标题" placeholder="请输入笔记标题" clearable>
                </van-field>
            </div>
            <div class="note-cell">
                <van-field label="图片上传">
                    <template #input>
                        <van-uploader :after-read="afterRead" v-model="state.img" maxCount="1" />
                    </template>
                </van-field>
            </div>
            <div class="note-cell">
                <div class="sort">
                    <span>分类</span>
                    <span :v-model="state.type" is-link readonly label="分类" placeholder="选择分类"
                        @click="showPicker = true">{{
                        state.type }}<van-icon name="arrow" /></span>
                </div>
                <van-popup v-model:show="showPicker" round position="bottom">
                    <van-picker :columns="actions" @cancel="showPicker = false" @confirm="onConfirm" />
                </van-popup>
            </div>
            <div class="btn">
                <van-button type="primary" block @click="publish">发布笔记</van-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';

const router = useRouter();
const state = reactive({
    content: '',
    title: '',
    img: [],
    type: ''
})

const actions = [
    { text: '美食', value: '美食' },
    { text: '旅行', value: '旅行' },
    { text: '恋爱', value: '恋爱' },
    { text: '学习', value: '学习' },
    { text: '吵架', value: '吵架' },
]
state.type = ref('');
const showPicker = ref(false);
const onConfirm = ({ selectedOptions }) => {
    // console.log(selectedOptions);
    showPicker.value = false;
    state.type = selectedOptions[0].text;
};

const publish =async () => {
   const res= await axios.post('/note-publish', {
        title:state.title,
        note_content:state.content,
        head_img:state.img.length?state.img[0].content:'',
        note_type:state.type,
    })
    // console.log(res);
    showToast(res.msg);
    setTimeout(()=>{
        router.push('/noteClass');
    },2000)
}
</script>

<style lang="less" scoped>
.note-publish {
    min-height: 100vh;
    :deep(.ql-container) {
        height: 200px;
    }

    .note-cell {
        border-bottom: 1px solid #d1d5db;

        .sort {
            display: flex;
            justify-content: space-between;
            line-height: 3;
            padding: 3px 16px;
            color: #323233;
        }
    }
    .btn{
        width: 80%;
        margin: 0 auto;
        margin-top: 0.75rem;
    }
}
</style>