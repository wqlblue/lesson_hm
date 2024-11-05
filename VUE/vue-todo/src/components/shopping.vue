<template>
    <div>
        <table>
            <thead>
                <th>序号</th>
                <th>书籍名称</th>
                <th>出版数量</th>
                <th>价格</th>
                <th>购买数量</th>
                <th>操作</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in books" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td> {{ item.date }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <button @click="decrease(index)" :disabled="item.count <= 1">-</button>
                        <span class="counter">{{ item.count }}</span>
                        <button v-on:click="add(index)">+</button>
                    </td>
                    <td>
                        <button @click="del(index)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2>总价格{{ totalprice }}</h2>
    </div>
</template>

<script setup>
const books = reactive([
    {
        id: 1,
        name: 'Book A',
        date: '2023-01-01',
        price: 29.99,
        count: 1
    },
    {
        id: 2,
        name: 'Book B',
        date: '2023-02-15',
        price: 35.50,
        count: 1
    },
    {
        id: 3,
        name: 'Book C',
        date: '2023-03-20',
        price: 25.00,
        count: 1
    },
    {
        id: 4,
        name: 'Book D',
        date: '2023-04-10',
        price: 32.75,
        count: 1
    }
]);
import { computed, reactive } from 'vue'
const decrease = (i) => {

    books[i].count--
}
const add = (i) => {
    books[i].count++
}
const totalprice = computed(() => {
    let sum = 0
    for (let item of books) {

        sum += item.price * item.count
    }
    return sum

})
const del = (i) => {
    books.splice(i, 1)
}
</script>

<style lang="css" scoped>
table {
    margin: 0 auto;
    border: 1px solid gray;
    border-collapse: collapse;
}

th,
td {
    padding: 8px 16px;
    border: 1px solid gray;

}

.counter {
    margin: 0 5px;
}
</style>