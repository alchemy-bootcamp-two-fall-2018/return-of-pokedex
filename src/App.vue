<template>
  <div id="app">
      <Header 
      v-bind:filter="filter"
      v-bind:types="pokemonTypes"/>
      <Pokemons
      v-bind:pokemons="pokemons"/>
  </div>
</template>

<script>
import pokemonApi from './services/pokemonApi.js';
import Pokemons from './components/Pokemons';
import Header from './components/Header';

export default {
  data() {
    return {
      types: pokemonApi.getTypes(),
      pokemons: pokemonApi.getpokemons(),
      filter:{
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
      });
      return types;
    },
    filteredpokemons() {
      return this.pokemons.filter(pokemon => {
        const hasType_1 = !this.filter.type_1 || pokemon.type_1 === this.filter.type_1;
        
        
        return hasType_1;
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
