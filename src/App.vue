<template>
  <div id="app">
    <header
      v-bind:sort="sort"
      v-bind:filter="filter"/>
    <Pokemons v-bind:pokemons="sortedPokemons"/>
  </div>
</template>

<script>
import pokedex from '../pokedex.js';
import Pokemons from './components/Pokemons.vue';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            pokemons: pokedex.getPokemons(),
        };
    },
    
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


// Top-level container. Mediate between Filter/Sort in Header and Results.
// App will need to own the data:

// pokedex
// filter/sort
// And have a set of computed properties for applying the filter and the sort (the result of which will be passed to Pokedex)
