<template>
  <div id="app">
    <Header 
    v-bind:filter="filter"
    v-bind:types="pokemonTypes"
    v-bind:sort="sort"
    />
    <Pokemons v-bind:pokemons="sortedPokemons"/>
  </div>
</template>

<script>
import Pokemons from './components/Pokemons.vue';
import pokemonApi from './services/pokemonApi';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            pokemons:pokemonApi.getPokemons(),
            filter: {
                attack: 0,
                defense: 0,
                type_1: '',
                name: ''
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
            }); 
            return types;
        }, 
        filteredPokemons() {
            return this.pokemons.filter(pokemon => {
                const hasName = !this.filter.name || pokemon.pokemon.includes(this.filter.name);
                const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack;
                const hasDefense = !this.filter.defense || pokemon.defense >= this.filter.defense;
                const hasType_1 = !this.filter.type_1 || pokemon.type_1 === this.filter.type_1;
                return hasName && hasAttack && hasDefense && hasType_1;
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
