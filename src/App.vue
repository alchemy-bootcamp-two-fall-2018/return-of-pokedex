<template>
  <div id="app">
    <Header
        v-bind:filter="filter"
        v-bind:types="pokemonTypes"
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
