<template>
  <div id="app">
    <Header v-bind:filter="filter"/>
    {{filter}}
    <Pokemons v-bind:pokemons="filteredPokemons"/>
  </div>
</template>

<script>
import Pokemons from './components/Pokemons.vue';
import pokemonsApi from './services/pokedex';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            pokemons:pokemonsApi,
            filter: {
                attack: 0
            }
        };
    },
    components: {
        Header,
        Pokemons
    },
    computed: {
        filteredPokemons() {
            return this.pokemons.filter(pokemon => {
                return pokemon.attack > this.filter.attack;
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
