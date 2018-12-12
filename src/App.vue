<template>
  <div id="app">
    <Header msg="Return of PokeDex"
            v-bind:sort="sort" 
            v-bind:filter="filter" 
            v-bind:types="pokemonTypes"/>
            
    <Pokemons v-bind:pokemons="sortedPokemons"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Pokedex from '../pokedex.js';
import Pokemons from './components/Pokemons.vue';

export default {
    name: 'app',
    components: {
        Header,
        Pokemons
    },
    data() {
        return {
            pokemons: Pokedex,
            filter: {
                pokemon: '',
                hp: 0,
                defense: 0,
                type_1: '',
                type_2: '',
            },
            sort: {
                field: 'pokemon',
                direction: 1
            },
        };
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
                const hasName = !this.filter.pokemon || pokemon.pokemon >= this.filter.pokemon;
                const hasTypeOne = !this.filter.type_1 || pokemon.type_1 === this.filter.type_1;
                const hasTypeTwo = !this.filter.type_2 || pokemon.type_2 === this.filter.type_2;
                const hasHp = !this.filter.hp || pokemon.hp >= this.filter.hp;
                const hasDefense = !this.filter.defense || pokemon.defense >= this.filter.defense;
                return hasName && hasTypeOne && hasTypeTwo && hasHp && hasDefense;
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


<style lang="postcss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
