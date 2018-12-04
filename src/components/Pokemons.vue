<template>
    <ul>
        <Pokemon v-for="pokemons in pokemon"
        v-bind:key="pokemons.pokemon"
        v-bind:pokemons="pokemons"/>
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