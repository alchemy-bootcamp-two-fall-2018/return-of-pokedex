<template>
  <div id="app">
    <Header
      v-bind:sort="sort"
      v-bind:filter="filter"/>
    <Pokemons v-bind:pokedex="sortedPokemons"/>
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
                //const hasDefense = !this.filter.defense || pokemon.defense >= this.filter.defense;
                const hasType = !this.filter.type || pokemon.type_1 === this.filter.type ||
                pokemon.type_2 === this.filter.type;
            return hasAttack && hasName && hasType;
        });
        },
        // pokemon is confusingly in pokemon.js in place of "name"
        sortedPokemon() {
            const field = this.sort.field; //was sort.pokemon
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
