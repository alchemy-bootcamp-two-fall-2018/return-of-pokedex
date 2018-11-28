<template>
  <div id="app">
    <p> Pokedex </p>
    <Header
        v-bind:sort="sort"
        v-bind:filter="filter"
        v-bind:types="pokemonTypes"/>
    <PokemonsList v-bind:pokemons="sortedPokemon"/>
  </div>
</template>

<script>
import PokemonsList from './components/PokemonsList.vue';
import PokemonsArray from '../pokedex.js';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            pokemons: PokemonsArray,
            filter: {
                name: '',
                type: '',
                attack: '',
                deffense: ''
            },
            sort: {
                field: 'name',
                direction: 1
            }
        };
    },
    components: {
        PokemonsList,
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
        filteredPokemon() {
            return this.pokemons.filter(pokemon => {
                const hasLetters = !this.filter.name || pokemon.pokemon.includes(this.filter.name);
                const selectedType1 = !this.filter.type || pokemon.type_1 === this.filter.type || pokemon.type_2 === this.filter.type;
                const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack;
                const hasDefense = !this.filter.defense || pokemon.defense >= this.filter.defense;
                return hasLetters && selectedType1 && hasAttack && hasDefense;
            });
        },
        sortedPokemon() {
            const field = this.sort.field;
            const direction = this.sort.direction;

            return this.filteredPokemon.slice().sort((a, b) => {
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
  margin: 60px;
};

</style>
