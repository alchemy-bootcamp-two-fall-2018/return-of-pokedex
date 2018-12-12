<template>
    <ul>
        <Pokemon v-for="pokemon in pokemons"
        v-bind:key="pokemon.pokemon"
        v-bind:pokemon="pokemon"
        @click.native="onSelect(pokemon)"/>

    </ul>
</template>

<script>
import Pokemon from './pokemonDetail.vue';
export default {
    props: {
        pokemons: Array, 
        onSelect: Function
    }, 
    components: {
        Pokemon
    }, 
};
</script>

<style>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    list-style-type: none;
    margin: 0;
    padding: 0;
}

</style>
