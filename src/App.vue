<template>
  <div id="app">
    <Header/>
    <Pokemons v-bind:pokemons="pokemons"/>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import PokemonApi from '../pokemonApi';
import Pokemons from './components/pokemons.vue';

export default {
 
    data() {
        return {
            pokemons: PokemonApi.getPokemon()
        };
    },
    components: {
        Header,
        Pokemons
    },
    // computed: {
    //     filtered(){
    //         return this.pokemon.filter(pokemon => {
    //             const hasWeight = !this.filter.weightpokemon.weight > this.filter.weight;
    //             // other filters also here
    //         });
    //     }
    // }
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
