<template>
  <div id="app">
    <Header/>
    <Pokedex/>
  </div>
</template>

<script>
import Pokedex from './components/pokedex.vue';
import Header from './components/Header.vue';
import PokemonDetail from '../pokedex.js';

export default {
    name: 'app',
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
