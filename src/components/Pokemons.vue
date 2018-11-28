<template>
    <ul>
        <Pokemon v-for="pokemon in pokemons"
        v-bind:key="pokemon.pokemon"
        v-bind:pokemon="pokemon"/>
    </ul>
</template>

<script>
import Pokemon from './Pokemon.vue';
//import pokemons from '../services/pokedex.js';


export default {
    props: {
        pokemons: Array,
    },
    components: {
        Pokemon
    }
};
</script>

<style scoped>
ul {
    display: grid;
}
</style>