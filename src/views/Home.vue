<template>
    <div>
        <p> Här är jättestor knapp för jätteviktiga grejor. </p>
        <LargeButton class = "largebutton" @click="handleClick"> Click me </LargeButton>
        <LargeButtonGreen class = "largebutton" @click="handleClick"> Start Event </LargeButtonGreen>
        <LargeButtonRed class = "largebutton" @click="handleClick"> Abort Event</LargeButtonRed>
            <p> Här är mindre, mer diskreta och snyggare knapp för vanligare grejor: </p>
        <div>
            <SmalButton class= "smalbutton" @click="handleClick"> Click me 1 </SmalButton>
            <SmalButton class = "smalbutton" @click="handleClick"> Click me 2 </SmalButton>
        </div>
        <div>
            <p> Här är några vanliga dropdowns: </p>
            <Dropdown class = "dropdown"> Click </Dropdown>
            <Dropdown class = "dropdown"> Click to see more </Dropdown>
            <Dropdown class = "dropdown"> ||| </Dropdown>
        </div>
        <br>
        <br>
        <div>
        <p>Snygga radio-knappar är ju nice: </p>
        <RadioButton class = "radio-inline"> </RadioButton>
        </div>
            <p> Här är en logotype-dropdown: </p>
            <LogoDropdown id = lgodrpdwn> <img src="./img/loggo-icon.png" alt="logotype" height ="20" width="20"> </LogoDropdown>
    </div>
</template>

<script>
import LogoDropdown from '../components/LogoDropdown.vue';
import SmalButton from '../components/SmalButton.vue';
import LargeButton from '../components/LargeButton.vue';
import LargeButtonRed from '../components/LargeButtonRed.vue';
import LargeButtonGreen from '../components/LargeButtonGreen.vue';
import Dropdown from '../components/Dropdown.vue';
import RadioButton from '../components/RadioButton.vue';

export default {
    name: 'Home',
    components: {
        SmalButton,
        Dropdown,
        LogoDropdown,
        LargeButton,
        LargeButtonRed,
        LargeButtonGreen,
        RadioButton,
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

<style scoped>
.dropdown{
    padding: 6px 25px;
}
#lgodrpdwn{
    position: static;
    top: 170px;
    left: 100px;
}
.smalbutton{
    display: inline-block;
}
.largebutton{
    display: inline-block;
}

</style>
