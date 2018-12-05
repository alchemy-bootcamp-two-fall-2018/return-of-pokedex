<template>
  <div id="app">
    <Header
        v-bind:filter="filter"
        v-bind:sort="sort"
        v-bind:types="pokemonTypes"/>
    <Pokemons v-bind:pokemons="sortedPokemons"/>    <!--used to be filteredPokemons-->
  </div>
</template>

<script>
import pokemons from './services/pokedexApi.js';
import Pokemons from './components/Pokemons.vue';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            pokemons: pokemons.getPokemons(),
            filter: {
                pokemon:'',
                weight: 0,
                height: 0,
                type: '',
            },
            sort: {
                field: 'pokemon',     
                direction: 1
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
                if(!types.includes(pokemon.type_2)) {
                    types.push(pokemon.type_2);
                }
            });
            return types;
        },

        filteredPokemons() {
            return this.pokemons.filter(pokemon => {
                const hasName = !this.filter.pokemon || pokemon.pokemon.includes(this.filter.pokemon);
                const hasWeight = !this.filter.weight || pokemon.weight >= this.filter.weight;
                const hasHeight = !this.filter.height || pokemon.height >= this.filter.height;
                const hasTypes = !this.filter.type || pokemon.type_1 === this.filter.type || pokemon.type_2 === this.filter.type;
                return hasName && hasWeight && hasHeight && hasTypes;
            });
        },

        sortedPokemons() {
            const field = this.sort.field;
            const direction = this.sort.direction;

            return this.filteredPokemons.slice().sort((a, b) => {
                if(a[field] > b[field]) {
                    return 1 * direction;
                }
                if(a[field] < b[field]) {
                    return -1 * direction;
                }
                return 0;
            });
        }
    }
};
</script>

<style>

</style>
