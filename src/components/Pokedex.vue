<template>
  <ul>
    <Pokemon v-for="pokemon in pokemons"
      v-bind:key="pokemon.pokemon"
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
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  list-style-type: none;
}
</style>
