<template>
  <div id="app">
    <!-- <Header
      v-bind:sort="sort"
      v-bind:filter="filter"
      v-bind:types="pokemonTypes"/> -->

    <Pokemons v-bind:pokemons="pokemons"/>
  </div>
</template>

<script>
import pokemonsApi from './services/pokemons-api';
import Pokemons from './components/Pokemons';

export default {
  data() {
    return {
      pokemons: pokemonsApi.getPokemons(),
    };
  },
  components: {
    Pokemons,
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
