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
    data() {
        return {
            pokemons: pokemonApi.getPokemons()
        };
    },
    components: {
        Pokemon
    }
};
</script>

<style>

</style>