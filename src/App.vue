<template>
  <div id="app">
    <Header
      v-bind:sort="sort"
      v-bind:filter="filter"/>
    <Pokemons v-bind:pokedex="sortedPokemon"/>
  </div>
</template>

<script>
import pokemonApi from './services/pokemonApi.js';
import Pokemons from './components/Pokemons.vue';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            pokedex: pokemonApi.getPokemons(),
            filter: {
                pokemon: '',
                type1: '',
                type2: '',
                attack: 0
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
        filtered() {
            return this.pokedex.filter(pokemon => {
                const hasName = !this.filter.pokemon || pokemon.pokemon.includes(this.filter.pokemon);
                const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack;
                const hasType = !this.filter.type || pokemon.type_1 === this.filter.type ||
                pokemon.type_2 === this.filter.type;
                return hasAttack && hasName && hasType;
            });
        },
        sortedPokemon() {
            const field = this.sort.field;
            const direction = this.sort.direction;
            return this.filtered.slice().sort((a, b) => {
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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #778c7a
}
</style>