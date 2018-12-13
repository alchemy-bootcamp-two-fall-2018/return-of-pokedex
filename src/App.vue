<template>
  <div id="app">
    <Header
      v-bind:sort="sort"
      v-bind:filter="filter"
      v-bind:types="pokemonTypes"/>
    <Pokedex v-bind:pokemons="sortedPokemons"
      :selected="selected"
      :onSelect="handleSelect"/>
  </div>
</template>

<script>
import pokemonsApi from './pokemonsApi';
import Pokedex from './components/Pokedex.vue';
import Header from './components/Header.vue';
export default {
  data() {
    return {
      pokemons: pokemonsApi.getPokemons(),
      filter: {
        attack: 0,
        type: '',
      },
      sort: {
        field: 'name',
      },
      selected: null,
      show: false
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
    filteredPokemons() {
      return this.pokemons.filter(pokemon => {
        const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack;
        const hasType = !this.filter.type || pokemon.type_1 === 
                this.filter.type || pokemon.type_2 === this.filter.type;
        return hasAttack && hasType;
      });
    },
    sortedPokemons() {
      const field = this.sort.field;
      return this.filteredPokemons.slice().sort((a, b) => {
        if(a[field] > b[field]) {
          return 1;
        }
        if(a[field] < b[field]) {
          return -1; 
        }
        return 0;
      });
    }
  },
  methods: {
    handleSelect(pokemon) {
      this.selected = pokemon;
      this.show = true;
      console.log('this is a pokemon', pokemon);
    }
  }
};
</script>

<style lang="postcss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
}
</style>