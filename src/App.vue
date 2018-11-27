<template>
  <div id="app"> 
    <Pokemons v-bind:pokemons="pokemons"/>
  </div>
</template>

<script>
import pokemons from '../pokedex.js'; 
import Pokemons from './components/Pokemons.vue'; 

export default {
    data() {
        return {
            pokemons,
        }; 
    },
    components: {
        Pokemons
    }
};
</script>