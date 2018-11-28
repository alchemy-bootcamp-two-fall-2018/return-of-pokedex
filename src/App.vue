<template>
  <div id="app">
    <Header/>
    <Pokedex v-bind:pokedex="pokedex"/>
  </div>
</template>

<script>
import pokedex from '../pokedex.js';
import Header from './components/Header.vue';
import Pokedex from './components/Pokedex.vue';

export default {
    data() {
        return {
            pokedex
            // pokedex: pokedex.getPokedex(),
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
