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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>
