<template>
  <ul>
      <Pokemon v-for="pokemon in pokemons"
        v-bind:key="pokemon.name"
        v-bind:pokemon="pokemon"/>
  </ul>      
</template>

<script>
      
import pokemonsApi from '../services/pokedex.js';
import Pokemon from './Pokemon.vue';

export default {
    data() {
        return {
            pokemons: pokemonsApi
        };
    },
    components: {
        Pokemon
    }
};
</script>
      
<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-row-gap: 200px;
  
}
      
</style>
      