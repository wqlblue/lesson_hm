<template>
    <div>
        Hot page ---{{ $route.params.id }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id);

</script>

<style lang="scss" scoped></style>