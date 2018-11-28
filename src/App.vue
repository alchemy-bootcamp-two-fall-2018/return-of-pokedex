<template>
  <div id="app">
    <Header
        v-bind:types="pokemonTypes"
        v-bind:filter="filter"/>

    <Pokedex v-bind:pokedex="filteredPokedex"/>
  </div>
</template>

<script>
import pokedex from '../pokedex.js';
import Header from './components/Header.vue';
import Pokedex from './components/Pokedex.vue';

export default {
    data() {
        return {
            pokedex: pokedex,
            filter: {
                type: '',
            },
            sort: {
                field: 'pokemon',
            }
        };
    },
    components: {
        Header,
        Pokedex
    },
    computed: {
        pokemonTypes() {
            const names = [];
            this.pokedex.forEach(pokemon => {
                if(!names.includes(pokemon.pokemon)) {
                    names.push(pokemon.pokemon);
                }
            });

            const types = [];
            this.pokedex.forEach(pokemon => {
                if(!types.includes(pokemon.type_1)) {
                    types.push(pokemon.type_1);
                }
            });
            return types;
        },
        filteredPokedex() {
            return this.pokedex.filter(pokemon => {
                const hasName = !this.filter.type || pokemon.pokemon === this.filter.name;
                const hasType = !this.filter.type || pokemon.type_1 === this.filter.type;
                return hasName && hasType;
            }),
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
