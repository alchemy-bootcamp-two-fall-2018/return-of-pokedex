<template>
  <div id="app">
    <ul>
      <Characters 
      v-for="character in characters"
      v-bind:"filter"
      v-bind:"types"
  </div>
</template>

<script>

export default {
  data() {
    return {
      characters:pokedex.getCharacters(),
      filter:{
        type: ''
      }
    };
  },
  components: {
    Header,
    characters
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
