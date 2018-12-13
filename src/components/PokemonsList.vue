<template>
    <transition-group 
        name="staggered-fade"
        tag="ul"
        :css="false"
        :before-enter="beforeEnter"
        :enter="enter"
        :leave="leave"
    >
        <Pokemon v-for="pokemon in pokemons"
            :key="pokemon.pokemon"
            :pokemon="pokemon"
            :selected="selected"
            :onSelect="handleSelect"/>
    </transition-group>
</template>

<script>
import Pokemon from './PokemonDetail.vue';
export default {
    data() {
        return {
            selected: null
        };
    },
    props: {
        pokemons: Array
    },
    components: {
        Pokemon
    },
    methods: {
        handleSelect(pokemon) {
            this.selected = pokemon;
        },
        beforeEnter: function(el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter: function(el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                //eslint-disable-next-line
                Velocity(
                    el,
                    { opacity: 1, height: '250px' },
                    { complete: done }
                );
            }, delay, 3000);
        },
        leave: function(el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                //eslint-disable-next-line
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                );
            }, delay, 3000);
        }
    }
};
</script>

<style scoped>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    list-style: none;
    margin: 20px;
    padding: 20px;
    color: whitesmoke;
    border: solid yellow;
    /* max-width: 50%; */
}
li {
    margin: 10px;
    border: solid red;
    background:black;
    min-width: 175px;
    height: 250px;
}
</style>
