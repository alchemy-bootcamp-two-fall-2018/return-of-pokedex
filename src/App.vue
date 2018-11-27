<template>
  <div id="app">
      <PokeFilter v-bind:onSearch="handleSearch"/>
      <PokeSort v-bind:onSort="handleSort" />
      <Tile v-bind:pokemons="pokemons"/>
  </div>
</template>

<script>
import pokemons from './pokedex.js';
import PokeFilter from './components/Filter.vue';
import PokeSort from './components/Sort.vue';
import Tile from './components/Tile.vue';

export default {
    data() {
        return {
            pokemons
        };
    },
    components: {
        PokeFilter,
        PokeSort,
        Tile
    },
    methods: {
        handleSearch(filter, input) {
            this.pokemons = pokemons.filter(poke => {
                return poke[filter].includes(input);
            });
            console.log(this.pokemons);
        },
        handleSort(sortFilter) {
            console.log(sortFilter);
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
