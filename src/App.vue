<template>
  <div id="app">

    <Header
    v-bind:filter="filter"/>


    <Pokemons v-bind:pokemons="filtered"/>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import PokemonApi from '../pokemonApi';
import Pokemons from './components/pokemons.vue';

export default {
 
    data() {
        return {
            pokemons: PokemonApi.getPokemon(), 
            filter: {
                name:''
            }
        };
    },
    components: {
        Header,
        Pokemons
    },
    computed: {
        filtered(){
            return this.pokemons.filter(pokemon => {
                const hasName = !this.filter.name || pokemon.pokemon.includes(this.filter.name);
                return hasName;
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
