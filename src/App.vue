<template>
  <div id="app">
    <Header
      v-bind:filter="filter"
      v-bind:types="pokemonTypes"
      v-bind:sort="sort"
    />
    <Pokedex v-bind:pokemons="sortedPokemon"/>
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
      },
      sort: {
        field: 'name',
        direction: 1
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
    },
    sortedPokemon() {
      const field = this.sort.field;
      const direction = this.sort.direction;

      return this.filteredPokemon.slice().sort((a, b) => {
        if(a[field] > b[field]) {
          return 1 * direction;
        }
        if(a[field] < b[field]) {
          return -1 * direction;
        }
        return 0;
      });
    }
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  display: flex;
  flex-flow: column;
}

</style>
