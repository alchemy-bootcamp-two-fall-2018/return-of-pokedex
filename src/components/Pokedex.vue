<template>
    <ul>
        <transition-group name="flip-list" tag="ul">
            <Pokemon v-for="pokemon in pokemons"
            v-bind:key="pokemon.id"
            v-bind:pokemon="pokemon"/>
        </transition-group>
    </ul>

</template>

<script>
import Pokemon from './Pokemon.vue';
export default {
    props: {
        pokemons: Array
    },
    components: {
        Pokemon,
    }
};
</script>

<style lang="postcss" scoped>
    ul {
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .flip-list-move {
        transition: transform 1s;
    }
    
</style>
