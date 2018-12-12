<template>
    <transition-group n
    ame="flip-list" 
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

<style scoped lang="postcss">
    ul {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-column-gap: 15px;
            grid-row-gap: 15px;
            list-style-type: none;
            margin: 0;
            padding: 0;
            height: calc(100vh - 150px);
            width: 50vw;
            overflow-y: auto;
        };
</style>
