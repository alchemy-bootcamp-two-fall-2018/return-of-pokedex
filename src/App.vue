<template>
  <div id="app">
      <Header 
      v-bind:filter="filter"
      v-bind:types="pokemonTypes"
      v-bind:sort="sort"/>
      <Pokemons
      v-bind:pokemons="sortedPokemon"/>
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
      filter: {
        type: ''
      },
      sort: {
        field: 'name',
        direction: 1
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
    filteredPokemons() {
      return this.pokemons.filter(pokemon => {
        const hasName = !this.filter.pokemon || pokemon.pokemon.includes(this.filter.name);
        const hasType_1 = !this.filter.type_1 || pokemon.type_1 === this.filter.type_1;
        const hasType_2 = !this.filter.type_2 || pokemon.type_2 === this.filter.type_2;
        const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack;
        const hasDefense = !this.filter.defense || pokemon.defense >= this.filter.defense;
        
        
        return hasName && hasType_1 && hasType_2 && hasAttack && hasDefense;
      });
    },
    sortedPokemon() {
      const field = this.sort.field;
      const direction = this.sort.direction;
      return this.filteredPokemons.slice().sort((a, b) => {
        if(a[field] > b[field]) {
          return 1 * direction;
        }
        if(a[field] < b[field]) {
          return -1 * direction;
        }
        return 0;
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
