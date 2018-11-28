<template>
  <div id="app">
    <Header
        v-bind:filter="filter"
        v-bind:type_1="pokemonTypes"
    />

    <Pokemons v-bind:pokemons="filteredPokemons"/>

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
            pokemons: pokemons.getPokemons(),

            filter: {
                weight: 0,
                pokemon:'',
                height: 0,
                types: '',
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
                const hasName = !this.filter.pokemon || pokemon.pokemon.includes(this.filter.pokemon);
                const hasWeight = !this.filter.weight || pokemon.weight >= this.filter.weight;
                const hasHeight = !this.filter.height || pokemon.height >= this.filter.height;
                const hasTypes = !this.filter.type_1 || pokemon.type_1.includes(this.filter.pokemon);
                return hasName && hasWeight && hasHeight && hasTypes;
            });
        },






    }
};





</script>




<style>

</style>
