<template>
  <div id="app">
    <Header
      v-bind:filter="filter"
      v-bind:types="pokemonTypes"
    />
    <PokemonsList v-bind:pokemons="filteredPokemon"/>
  </div>
</template>

<script>
import PokemonsList from './components/PokemonsList.vue';
import PokemonsArray from '../pokedex.js';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            pokemons: PokemonsArray,
            filter: {
                name: '',
                type: ''
            }
            
        };
    },
    components: {
        PokemonsList,
        Header
    },
    computed: {
        pokemonTypes() {
            const types = [];
            this.pokemons.forEach(pokemon => {
                if(!types.includes(pokemon.type_1)) {
                    types.push(pokemon.type_1);
                }
            });
            return types;
        },
        filteredPokemon() {
            return this.pokemons.filter(pokemon => {
                const hasLetters = !this.filter.name || pokemon.pokemon.includes(this.filter.name);
                const selectedType1 = !this.filter.type || pokemon.type_1 === this.filter.type || pokemon.type_2 === this.filter.type;
                return hasLetters && selectedType1;
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
