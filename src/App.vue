<template>
  <div id="app">
    <Header/>
    <Pokedex/>
  </div>
</template>

<script>
import pokemonApi from './pokemonApi.js';
import Header from './components/Header.vue';
import Pokedex from './components/Pokedex.vue';

export default {
  data() {
    return {
      pokemon: pokemonApi.getAll(),
    };
  },
  components: {
    Header,
    Pokedex
  }
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
