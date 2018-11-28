<template>
  <div id="app">
    <Header 
      v-bind:types="pokemonTypes"
      v-bind:filter="filter"
    />
    <Pokedex v-bind:pokemons="pokemons" />
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
                type_1: '',
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
        // filtered(){ 
        //     return this.pokemons.filter(pokemon => {
                
                
        //     });
            
        // }
     
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
