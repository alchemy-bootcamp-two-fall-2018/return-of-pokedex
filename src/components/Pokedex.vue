<template>
    <transition-group 
    name="flip-list" 
    tag="ul"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave">
   
        <Pokemon v-for="pokemon in pokemons"
        @click.native="onSelect(pokemon)"
        v-bind:key="pokemon.pokemon"
        v-bind:pokemon="pokemon"/>
    </transition-group>
</template>

<script>

import Pokemon from './Pokemon.vue';

export default {
    props: {
        pokemons: Array,
        onSelect: Function
    },
    
    components: {
        Pokemon
    },

    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter: function(el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                /* eslint-disable-next-line */
                Velocity(
                    el,
                    { opacity: 1, height: '250px' },
                    { complete: done }
                );
            }, delay);
        }, 
        leave: function(el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                /* eslint-disable-next-line */
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                );
            }, delay);
        },
    }

};
</script>

<style lang="postcss" scoped>
    ul {
            margin-top: 40px;
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-row-gap: 20px;
            grid-column-gap: 10px;
            padding: 0px;
        }
</style>
