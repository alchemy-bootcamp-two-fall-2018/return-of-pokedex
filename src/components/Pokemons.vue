<template>
    <ul>
        <Pokemon v-for="pokemon in pokemons"
        v-bind:key="pokemon.pokemon"
        v-bind:pokemon="pokemon"/>
    </ul>
</template>

<script>
import Pokemon from './Pokemon.vue';
import pokedex from '../services/pokedex.js';


export default {
    props: {
        pokedex: Array,
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