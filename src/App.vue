<template>
  <div id="app">
    <!-- <Header
        v-bind:sort="sort"
        v-bind:filter="filter"/> -->

    <Pokedex v-bind:pokedex="pokedex"/>
  </div>
</template>

<script>
import pokedex from '../pokedex.js';
// import Header from './components/Header.vue';
import Pokedex from './components/Pokedex.vue';

export default {
    data() {
        return {
            pokedex: pokedex,
            filter: {
                type: '',
            },
            sort: {
                field: 'pokemon',
            }
        };
    },
    components: {
        // Header,
        Pokedex
    },
    filteredPokedex() {
        return this.pokedex.filter(pokemon => {
            const hasType = !this.filter.type || pokemon.type_1 === this.filter.type;
            return hasType;
        });
    
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
