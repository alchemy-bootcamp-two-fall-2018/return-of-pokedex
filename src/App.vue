<template>
  <div id="app">
    <Header
    v-bind:filter="filter"
    v-bind:types="pokemonTypes"
    />
    <Pokedex v-bind:pokemons="filteredPokemon"/>
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
        if(!types.includes(pokemon.type_2)) {
          types.push(pokemon.type_2);
        }
      });
      return types;
    },
    filteredPokemon() {
      return this.pokemons.filter(pokemon => {
        const hasType = !this.filter.type || pokemon.type_1 === this.filter.type || pokemon.type_2 === this.filter.type;
        const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack;
        return hasType && hasAttack;
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
