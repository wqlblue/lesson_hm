<template>
    <div>
        <span class="support-icon"></span>
    </div>
</template>

<script setup>
const props = defineProps({
    type: {
        type: Number,
        default: 0
    }
})
const iconClass = computed(() => {

})
</script>

<style lang="less" scoped>
.support-icon {
    display: inline-block;
    background-repeat: no-repeat;

}
</style>