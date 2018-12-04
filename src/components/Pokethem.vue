<template>
    <ul>
        <Pokemon
            v-for="pokemon in pokethem"
            :key="pokemon.pokemon"
            :pokemon="pokemon"/>
    </ul>
</template>

<script>
import Pokemon from './Pokemon';

export default {
    props: {
        pokethem: Array
    },
    components: {
        Pokemon
    }
};
</script>

<style lang="postcss" scoped>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    list-style-type: none;
    margin:0;
    padding: 0;
    text-align: center;
}
</style>
