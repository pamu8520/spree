<template>
  <div class="dropdown-item-container" v-if="active">
    <slot/>
  </div>
</template>

<script>
export default {
    name: 'DropdownMenu',
    inject: ['sharedState'],
    computed: {
        active() {
            return this.sharedState.active;
        },
    },
};
</script>

<style scoped>
.dropdown-item-container {
    background-color: #ededed;
    border: unset;
    border-radius: 4px;
    padding: 6px 14px;
    box-shadow: 1px 1px 6px 1px #cacaca;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
}
</style>
