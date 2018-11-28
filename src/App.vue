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
import Pokedex from './components/Pokedex.vue';
import Header from './components/Header.vue';
export default {
  data() {
    return {
      pokemons: pokemonApi.getAll(),
      filter: {
        type: '',
      }
    };
  },
  components: {
    Pokedex,
    Header
  },
  computed: {
    pokemonTypes() {
      const types = [];
      this.pokemons.forEach(pokemon => {
        if(!types.includes(pokemon.type_1 || pokemon.type_2)) {
          types.push(pokemon.type_1);
        }
      });
      return types;
    },
    filteredPokemon() {
      return this.pokemons.filter(pokemon => {
        const hasType = !this.filter.type || pokemon.type_1 === this.filter.type;
        return hasType;
      });
    },
    // sortedPokemon() {
      
    // }
  }
}
</script>

<style>

</style>
