<template>
    <ul>
        <Pokemon v-for="pokemon in pokedex"
        v-bind:key="pokemon.pokemon"
        v-bind:pokemon="pokemon"/>
    </ul>
</template>

<script>
import Pokemon from './Pokemon.vue';
export default {
    props: {
        pokedex: Array
    },
    components: {
        Pokemon
    }
};
</script>

<style scoped>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax (300pc, 1fr));
    list-style-type: none;
    margin: 0;
    padding: 0;
}

</style>
