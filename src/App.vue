<template>
  <div id="app">
    <Header
      v-bind:sort="sort"
      v-bind:filter="filter"/>
    <Pokemons v-bind:pokemons="sortedPokemons"/>
  </div>
</template>

<script>
import pokedex from './services/pokedex.js';
import Pokemons from './components/Pokemons.vue';
import Header from './components/Header.vue';

export default {
    data() {
        return {
            pokemons: pokedex.getPokemons(),
            filter: {
                type1: '',
                type2: '',
                attack: 0
            },
            sort: {
                field: 'pokemon',
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
                const hasType1 = !this.filter.type1 || pokemon.type1 === this.filter.type1;
                const hasType2 = !this.filter.type2 || pokemon.type2 === this.filter.type2;
                const hasAttack = !this.filter.attack || pokemon.attack === this.filter.attack;
                // const hasType1 = pokemon.type_1 === this.filter.type1;
                // const hasType2 = pokemon.type_2 === this.filter.type2;
                // const hasAttack = pokemon.attack >= this.filter.attack;
                return hasType1 && hasType2 && hasAttack;
            });
        },
        // pokemon is confusingly in pokemon.js in place of "name"
        sortedPokemons() {
            const field = this.sort.field; //was sort.pokemon
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
}
</style>

// Top-level container. Mediate between Filter/Sort in Header and Results.
// App will need to own the data:

// pokedex
// filter/sort
// And have a set of computed properties for applying the filter and the sort (the result of which will be passed to Pokedex)
