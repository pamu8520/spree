<template>
    <div>
        <div
            v-for="burger in burgers"
            v-bind:key="burger.name"
        >
            <span>{{ burger.name }}</span>
            <span>{{ burger.kCal }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
    },
    data() {
        return {
            burgers: [
                { name: 'small burger', kCal: 250 },
                { name: 'standard burger', kCal: 450 },
                { name: 'large burger', kCal: 850 },
            ],
        };
    },
};
</script>
