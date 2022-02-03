<template>
    <button @click="callback($event)">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Abc',
    methods: {
        callback(e) {
            this.$emit('click', e);
        },
    },
};
</script>

<style scoped>

</style>
