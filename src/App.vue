<template>
  <div id="app">
    <Header 
      
      v-bind:types="pokemonTypes"
      v-bind:filter="filter"
    />
    <Pokedex v-bind:pokemons="filteredPokemons" />
  </div>
</template>

<script>
import pokemonApi from './pokemonsApi.js';
import Pokedex from './components/Pokedex';
import Header from './components/Header';

export default {
    data() {
        return {
            pokemons: pokemonApi.getPokemons(), 

            filter: {
                type: '',
                attack: 0,
                defense: 0
            },
        };
    },

    components: {
        Pokedex,
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
        
        filteredPokemons() {
            return this.pokemons.filter(pokemon => {
                const hasType = !this.filter.type || pokemon.type_1 === this.filter.type;
                const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack;
                return hasType && hasAttack;
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
