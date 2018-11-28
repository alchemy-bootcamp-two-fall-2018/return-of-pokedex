<template>
  <div id="app">
    <Pokedex v-bind:pokemons="pokemons"/>
  </div>
</template>
 <script>
import pokemonApi from './pokemonApi.js';
import Pokedex from './components/Pokedex.vue';
export default {
  data() {
    return {
      pokemons: pokemonApi.getAll(),
    };
  },
  components: {
    Pokedex
  },
}
</script>
 <style>
 </style>
