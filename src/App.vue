<template>
  <div id="app">
    <Header
    v-bind:filter="filter"
    v-bind:types="pokemonTypes"
    />
    <Pokedex v-bind:pokemons="pokemons"/>
  </div>
</template>

<script>
import pokemonApi from './pokemonApi.js';
import Header from './components/Header.vue';
import Pokedex from './components/Pokedex.vue';

export default {
  data() {
    return {
      pokemons: pokemonApi.getAll(),
      filter: {
        type:'',
      }
    };
  },
  components: {
    Header,
    Pokedex
  },
  computed: {
    pokemonTypes() {
      const types = [];
      this.pokemons.forEach(pokemon => {
        if(!types.includes(pokemon.type_1)) {
          types.push(pokemon.type_1);
        }
      });
      return types;
    },
    filteredPokemon() {
      return this.pokemons.filter(pokemon => {
        const hasType = !this.filter.type || pokemon.type === this.filter.type;
        return hasType;
      });
    }
  },
};


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
