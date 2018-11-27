<template>
    <ul>
        <Pokemon v-for="pokemon in pokemons"
            v-bind:key="pokemon.name"
            v-bind:pokemon="pokemon"/>
    </ul>
</template>

<script>
import Pokemon from './PokemonDetail.vue';
export default {
    props: {
        pokemons: Array
    },
    components: {
        Pokemon
    }
};
</script>

<style scoped>
ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    list-style: none;
    margin: 10px;
}
</style>
