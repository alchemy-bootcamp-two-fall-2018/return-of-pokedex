<template>
    <ul>
        <Pokemon v-for="pokemon in pokemons"
        v-bind:key="pokemon.id"
        v-bind:pokemon="pokemon"/>
    </ul>
</template>

<script>
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
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    
</style>
