<template>
    <ul>
        <Pokemon v-for="pokemon in pokemon"
        v-bind:key="pokemon.pokemon"
        v-bind:pokemon="pokemon"/>
    </ul>
</template>

<script>
import Pokemon from './Pokemon.vue';

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