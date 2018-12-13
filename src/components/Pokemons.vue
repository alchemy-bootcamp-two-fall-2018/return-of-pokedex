<template>
    <transition-group
        name="staggered-fade"
        tag="ul"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
    >
        <Pokemon v-for="pokemon in pokedex"
    
            v-bind:key="pokemon.pokemon"
            v-bind:pokemon="pokemon"
            />
    </transition-group>
</template>

<script>
import Pokemon from './Pokemon.vue';

export default {
    props: {
        pokedex: Array,
    },
    components: {
        Pokemon
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            var delay = 300;
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 1, height: '250px' },
                    { complete: done }
                );
            }, delay)
        },
        leave: function (el, done) {
            var delay = 200;
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 1, height: '250px' },
                    { complete: done }
                );            
            }, delay)
        },
    }
};
</script>
<style scoped style="postcss">
ul {
    display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 50 px 50px;
        grid-gap: 10px;
        list-style: none;
        margin: 0 auto;
        padding-left: 0;
}
</style>