<template>
  <div id="app">
    <Header 
        v-bind:types="pokemonTypes"
        v-bind:filter="filter"
        v-bind:sort="sort"
    />
    <Pokedex 
        v-bind:pokemons="sortedPokemons"
        v-bind:selected="selected"
        v-bind:onSelect="handleSelect"
    />
    <Modal>
      <PokemonDetail v-bind:pokemon="selected"/> 
    </Modal>
  </div>
</template>

<script>
import pokemonApi from './pokemonApi.js';
import Pokedex from './components/Pokedex.vue';
import PokemonDetail from './components/PokemonDetail.vue';
import Header from './components/Header.vue';
import Modal from './components/Modal.vue';

export default {
  data() {
    return {
      pokemons: pokemonApi.getPokemons(),

      filter: {
        attack: 0,
        defense: 0,
        type: ''
      },
      sort: {
        field: 'name',
        direction: 1
      },
      selected: null
    };
  },
  components: {
    Header,
    Pokedex,
    PokemonDetail,
    Modal
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
        const hasDefense = !this.filter.defense || pokemon.defense >= this.filter.defense;
        const hasType = !this.filter.type || pokemon.type_1 === this.filter.type || pokemon.type_2 === this.filter.type;
        return hasAttack && hasDefense && hasType;
      });
    },
    sortedPokemons() {
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
  },
  methods: {
    handleSelect(pokemon) {
      this.selected = pokemon;
      console.log('this is a pokemon', pokemon);
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
}
</style>
