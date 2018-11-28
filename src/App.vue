<template>
  <div id="app">
      <Header 
      v-bind:filter="filter"
      v-bind:types="types"/>
      <Characters
      v-bind:characters="characters"/>
  </div>
</template>

<script>
import pokemonApi from './services/pokemonApi.js';
import Characters from './components/Characters';
import Header from './components/Header';

export default {
  data() {
    return {
      types: pokemonApi.getTypes(),
      characters: pokemonApi.getCharacters(),
      filter:{
        type: ''
      }
    };
  },
  components: {
    Header,
    Characters 
    
  },
  computed: {
    filteredCharacters() {
      return this.character.filter(character => {
        const hasType = !this.filter.type || character.type >= this.filter.type;
        
        
        return hasType;
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
