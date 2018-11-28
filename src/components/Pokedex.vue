<template>
    <ul>
        <Pokemon v-for="pokemon in pokemons"
        v-bind:key="pokemon.pokemon"
        v-bind:pokemon="pokemon"/>
    </ul>
</template>

<script>
import pokemonApi from '../pokemonApi.js';
import Pokemon from './Pokemon.vue';

export default {
    props: {
        pokemons: Array
    },
    components: {
        Pokemon
    }
};
</script>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 15px;
        grid-row-gap: 15px;
        list-style-type: none;
        margin: 0;
        padding: 0;
    };

</style>