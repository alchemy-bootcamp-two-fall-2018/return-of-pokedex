<template>
  <div id="app">
    <Header 
        v-bind:sort="sort"
        v-bind:filter="filter"
        v-bind:types="pokemonTypes"
        v-bind:defense="defense"/>

    <Pokedex v-bind:pokemons="sortedPokemons"/>
  </div>
</template>

<script>
import Pokedex from './components/Pokedex.vue';
import pokemons from '../services/pokedex.js';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            pokemons: pokemons.getPokemons(),
            filter: {
                weight: 0,
                type_1:'',
                defense:''
            },
            sort: {
                field: 'all'
            }
        };
    },
    components: {
        Header,
        Pokedex
    },
    computed: {
        pokemonTypes() {
            const types = [];
            this.pokemons.forEach(pokemon => {
                if(!types.includes(pokemon.type_1)) {
                    types.push(pokemon.type_1);
                }
                if(!types.includes(pokemon.type_2)) {
                    types.push(pokemon.type_2);
                }
            });
            return types;
        },
        filteredPokemons() {
            return this.pokemons.filter(pokemon => {
                const hasWeight = !this.filter.weight || pokemon.weight >= this.filter.weight;
                const hasDefense = !this.filter.defense || pokemon.defense >= this.filter.defense;
                const hasType = !this.filter.type || pokemon.type_1 === this.filter.type || pokemon.type_2 === this.filter.type;
                return hasWeight && hasDefense && hasType;
            });
        },
        sortedPokemons() {
            const field = this.sort.field;
            return this.filteredPokemons.slice().sort((a, b) => {
                if(a[field] > b[field]) {
                    return 1;
                }
                if(a[field] < b[field]) {
                    return -1;
                }
                return 0;
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
  background-color:azure;
}
</style>
