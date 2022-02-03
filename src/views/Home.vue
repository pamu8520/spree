<template>
    <div>
        <div
            v-for="burger in burgers"
            v-bind:key="burger.name"
        >
            <span>{{ burger.name }}</span>
            <span>{{ burger.kCal }}</span>
        </div>
        <Button @click="handleClick">
            Click me 1
        </Button>
        <Button @click="handleClick">
            Click me 2
        </Button>
        <Button @click="handleClick">
            Click me 3
        </Button>
        <Typography>hej</Typography>
    </div>
</template>

<script>
import Button from '../components/Button.vue';
import Typography from '../components/Typography.vue';

export default {
    name: 'Home',
    components: {
        Button,
        Typography,
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
    methods: {
        handleClick() {
            // eslint-disable-next-line no-alert
            alert('hello world!');
        },
    },
};
</script>
