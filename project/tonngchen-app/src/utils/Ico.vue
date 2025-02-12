<template>
    <svg class="icon ml-4 text-3xl" aria-hidden="false">
        <use :xlink:href="'#' + props.name"></use>
    </svg>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    name:{
    type: String,
    required: true
}
})

</script>

<style lang="scss" scoped></style>