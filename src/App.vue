<template>
  <div id="app">
    <Header
      v-bind:types="pokemonTypes"
      v-bind:filter="filter"/>
      <!-- v-bind:sort="sort"/> -->
    <Pokemons v-bind:pokemons="sortedPokemons"/>
  </div>
</template>

<script>
import pokemonsApi from './services/pokemons-api';
import Pokemons from './components/Pokemons';
import Header from './components/Header';

export default {
  data() {
    return {
      pokemons: pokemonsApi.getPokemons(),

      filter: {
        type: ''
      }
    };
  },
  components: {
    Header,
    Pokemons
  },
  computed: {
    pokemonTypes() {
      const types = [];
      this.pokemons.forEach(pokemon => {
        if(!types.includes(pokemon.type_1)) {
          types.push(pokemon.type_1);
        }
        if(!types.includes(pokemon.type_2)) {
          types.push(pokemon.type_2);
        }
      });
      return types;
    },
    filteredPokemons() {
      return this.pokemons.filter(pokemon => {
        const hasType = !this.filter.type || pokemon.type_1 === this.filter.type || pokemon.type_2 === this.filter.type;
        return hasType;
      });
    }
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
