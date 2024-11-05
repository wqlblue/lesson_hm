<template>
    <ul>
        <li @click="showname(item.name)" v-for="(item, index) in list" key="item.id">{{ index + 1 }}-{{ item.name }}
        </li>
    </ul>
    <button v-on:mouseleave="handle">确认</button>
</template>

<script setup>
const list = [
    { id: 1, name: '庐州月' },
    { id: 2, name: '千百度' },
    { id: 3, name: '多余的解释' },
    { id: 4, name: '雅俗共赏' }

]
const handle = () => {
    console.log('handle')
}
const showname = (name) => {
    console.log('showname', name);

}
</script>

<style lang="scss" scoped></style>