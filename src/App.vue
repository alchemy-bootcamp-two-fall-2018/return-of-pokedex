<template>
  <div id="app">
    <Pokedex v-bind:pokemons="pokemons"/>
  </div>
</template>

<script>
import Pokedex from './components/Pokedex';
import pokemonApi from './pokemonApi.js';

export default {
    data() {
        return {
            pokemons: pokemonApi.getPokemons()
        };
    },
    components: {
        Pokedex
    }
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
