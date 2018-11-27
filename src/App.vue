<template>
  <div id="app">
    <Header/>
    <Pokemons v-bind:pokemons="pokemons"/>
  </div>
</template>

<script>
import pokemons from '../pokedexApi.js';
import Pokemons from './Pokemons.vue';
import Header from './Header.vue';
//each page or component needs to be added here if not on this page 


export default {
    
    data() {
        return {
            pokemons: pokemons.getPokemons()
        };
    },
    
    components: { 
        Header,
        Pokemons
    },
};





</script>




<style>

</style>
