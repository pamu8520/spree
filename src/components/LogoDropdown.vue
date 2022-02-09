<template>
  <div class="dropdown-container">
    <div class="dropdown-button-container">
        <button @click="toggle" class="dropdown-button"><slot /></button>
    </div>
    <DropdownMenu>
        <DropdownItem>Link 1</DropdownItem>
        <DropdownItem>Link 2</DropdownItem>
        <DropdownItem>Link 3</DropdownItem>
    </DropdownMenu>
  </div>
</template>

<script>
import DropdownMenu from './DropdownMenu.vue';
import DropdownItem from './DropdownItem.vue';

export default {
    name: 'Dropdown',
    components: {
        DropdownMenu,
        DropdownItem,
    },
    provide() {
        return {
            sharedState: this.sharedState,
        };
    },
    data() {
        return {
            sharedState: {
                active: false,
            },
        };
    },
    methods: {
        toggle() {
            this.sharedState.active = !this.sharedState.active;
        },
    },
};
</script>

<style scoped>
.dropdown-container {
    display: inline-flex;
    flex-direction: column;
}
.dropdown-button-container {
    display: inline-flex;
}
.dropdown-button {
    background-color: #ededed;
    border: unset;
    border-radius: 4px;
    padding: 7px 7px;
    display: flex;
    flex-shrink: 1;
}
</style>
