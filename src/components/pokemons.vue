<template>
    <ul>
        <Pokemon v-for="pokemon in pokemons"
        v-bind:key="pokemon.name"
        v-bind:pokemon="pokemon"/>

    </ul>
</template>

<script>
import Pokemon from './pokemonDetail.vue';
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

</style>
