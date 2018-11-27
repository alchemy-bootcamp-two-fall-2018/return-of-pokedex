<template>
  <div id="app">
    <h3>Test</h3>
    <PokemonsList v-bind:pokemons="pokemons"/>
  </div>
</template>

<script>
import PokemonsList from './components/PokemonsList.vue';
import PokemonsArray from '../pokedex.js';

export default {
    data() {
        return {
            pokemons: PokemonsArray
        };
    },
    components: {
        PokemonsList
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
