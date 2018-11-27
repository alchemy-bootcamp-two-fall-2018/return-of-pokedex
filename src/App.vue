<template>
  <div id="app">
      <Tile v-bind:pokemons="pokemons"/>
  </div>
</template>

<script>
import pokemons from './pokedex.js';
import Tile from './components/Tile.vue';

export default {
    data() {
        return {
            pokemons
        };
    },
    components: {
        Tile
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
