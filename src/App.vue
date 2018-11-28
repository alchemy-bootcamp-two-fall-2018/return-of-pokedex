<template>
  <div id="app">
    <Header
      v-bind:filter="filter"
    />
    <PokemonsList v-bind:pokemons="pokemons"/>
  </div>
</template>

<script>
import PokemonsList from './components/PokemonsList.vue';
import PokemonsArray from '../pokedex.js';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            pokemons: PokemonsArray,
            filter: {
                name: ''
            }
            
        };
    },
    components: {
        PokemonsList,
        Header
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
