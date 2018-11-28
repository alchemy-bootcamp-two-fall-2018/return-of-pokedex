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
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    list-style: none;
    margin: 20px;
    padding: 20px;
    color: whitesmoke;
    border: solid yellow;
}
li {
    margin: 10px;
    border: solid red;
    min-width: 175px;
}
</style>
